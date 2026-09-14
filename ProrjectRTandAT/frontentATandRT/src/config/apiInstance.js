import axios from 'axios'
import { useAuth } from '../context/authContext'

export const apiInstance=axios.create({
    baseURL:"http://localhost:5173/api/auth",
    withCredentials:true
})


const useApi=()=>{
    const {accessToken,setaccessToken}=useAuth()

    apiInstance.interceptors.request.use((config)=>{
        if(accessToken){
            config.headers.Authorization=`Bearer ${accessToken}`
        }
        return config
    },(error)=>{
        return Promise.reject(error)
    })

    apiInstance.interceptors.response.use(response=>response,
        async(error)=>{
            if(error.response && error.response.status==401){
                const res=await axios.post("http://localhost:5173/api/auth/refresh")
                setaccessToken(res.data.accessToken)
                error.config.headers.Authorization=`Bearer ${res.data.accessToken}`
                return axios(error.config)
            }
            return Promise.reject(error)
        }
    )
    return apiInstance
}

export default useApi
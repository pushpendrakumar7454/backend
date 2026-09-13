import axios from 'axios'

export const apiInstance=axios.create({
    baseURL:"http://localhost:5173/api/auth",
    withCredentials:true
})


const apiUse=()=>{
    apiInstance.interceptors.request.use(()=>{
        
    })
}
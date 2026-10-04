import axios from 'axios'
import {store} from'../app/store
const apiInstance=axios.create({
    baseURL:"http://localhost:5173",
    withCredentials:true
})

apiInstance.interceptors.request.use((config)=>{
    const accessToken=store.getState().auth.accessToken

    if(accessToken){
        config.headers.Authorization=`Bearer ${accessToken}`
    }
    return config
})
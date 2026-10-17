import { apiInstance } from "../../../config/apiInstance"

export const registerApi=async(cre)=>{
    try {
        const res=await apiInstance.post("/auth/register",cre)
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const loginAPi=async(cre)=>{
    try {
        const res=await apiInstance.post('/auth/login',cre)
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}


export const hydreatedUser=async()=>{
    try {
        const res=await apiInstance.get("/auth/me")
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
}

import apiInstance from '../../../config/apiInstance'

export const registerUser=async(creticial)=>{
    try {
        const res=await apiInstance.post("/auth/register",creticial)
        return res.data

    } catch (error) {
        console.log(error)
    }
}
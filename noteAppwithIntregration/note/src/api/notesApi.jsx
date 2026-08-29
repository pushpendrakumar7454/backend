import { apiInstance } from "../config/apiInstance"

export const createNote=async(data)=>{
    try {
        const res=await apiInstance.post("/notes/create",data)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const getNotes=async()=>{
    try {
    const res=await apiInstance.get('/notes/allnotes')  
    return res.data.data      
    } catch (error) {
        console.log(error)
        throw error
    }
}
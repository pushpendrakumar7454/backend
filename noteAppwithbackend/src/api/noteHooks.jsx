import { apiInstance } from "../config/apiInstance"

export const createNotes=async(formData)=>{
    try {
        const res=await apiInstance.post("/notes/create",formData)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getNotes=async()=>{
    try {
        const res=await apiInstance.get("/notes/allnotes")
        return res.data
    } catch (error) {
        console.log(error)
    }

}

export const deleteNotes=async(id)=>{
    try {
        const res=await apiInstance.delete(`/notes/delete/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
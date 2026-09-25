
import {uploadFiles} from '../services/service.storage.js'

export const createProductControler=async(req,res)=>{
    try {
        
    const fileName=[]

    for(let i=0;i<req.files.length;i++){
        const responce=await uploadFiles({
            buffer:req.files[i].buffer,
            fileName:req.files[i].orginalName
        })
        fileName.push(responce.url)
    }




        return res.status(201).json({
            message:"product createed"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
import urlModel from "../modules/url.moduls.js"
import { generateCode } from "../utils/url.js"

export const createUrlControllers=async(req,res)=>{
    try {
        const {url}=req.body
        
        if(!url){
            return res.status(401).json({
                message:"url not found"
            })
        }

        if(!url.startsWith("http://") && !url.startsWith("https://")){
            return res.status(400).json({
                messgae:"url is wromf please sttart https ans http"
            })
        }

        if(url.length>2048){
            return res.status(409).json({
                message:"character is to long please enter minimum 2048 character"
            })
        }

        let code=generateCode()

        const newUrl=await urlModel.create({
              orginalUrl:url,
              shortCode:code
        })

        return res.status(201).json({
            message:"url created succefully",
            data:newUrl
        })
       

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}


export const findAllUrlConterollers=async(req,res)=>{
    try{


  const urls=await urlModel.find()

  return res.status(200).json({
    message:"find all url seccufully",
    data:urls
  })
    }catch(error){
        return res.status(500).json({
            message:"internal server error",
        })
    }
}

export const deleteControllers=async(req,res)=>{
    try {
        const {id}=req.params
       const idx=await urlModel.findOne({id})
       if(idx){
        return res.status(401).json({
            message:"url not found"
        })
       }

       const newUrl=await urlModel.findOneAndDelete(id)

       return res.status(200).json({
        message:"url delted succefully",
        data:{
            newUrl
        }
       })

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
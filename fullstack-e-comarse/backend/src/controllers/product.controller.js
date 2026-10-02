import productModel from "../modules/product.module.js"
import { uploadFile } from "../services/storage.services.js"

export const createProductController=async(req,res)=>{
   try {
      
    const {title,category,brand,description}=req.body

    const fileUrl=await Promise.all(
        req.files.map(async(file)=>{
            const res=await uploadFile({
                buffer:file.buffer,
                fileName:file.originalname
            })

            return res.url
        })
    )

    const products=await productModel.create({
        title,
        category,
        brand,
          description,
        price:{
            amount:req.body.price.amount,
            curreny:req.body.price.curreny
        },
        sizes:req.body.sizes,
        images:fileUrl

    })
     
   return res.status(201).json({
    message:"product created succefully",
    data:products
   })

   } catch (error) {
    return res.status(500).json({
        message:"internal server error"
    })
   }
}

export const findAllProductsControler=async(req,res)=>{
   try {
     
    const products=await productModel.find()

    return res.status(200).json({
        message:"find all product succefully",
        data:products
    })

   } catch (error) {
    return res.status(500).json({
        message:"intternal server error"
    })
   }
}

export const deleteProductController=async(req,res)=>{
    try {
         
        const {id}=req.params

        const product=await productModel.findByIdAndDelete(id)

        return res.status(200).json({
            message:"product delete succefully",
            data:product
        })


    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}


export const updateProductController=async(req,res)=>{
    try {
         
   const {id}=req.params

    const {title,description,category,brand,price,sizes}=req.body
    const updateData={}

    if(title!=="undefined"){
        updateData.title=title
    }

    if(description!=="undefined"){
        updateData.description=description
    }

    if(brand!=="undefined"){
        updataData.brand=brand
    }

    if(category!=="undefined"){
        updateData.category=category
    }

    if(price!=="undefined"){
        updateData.price=price
    }

    if(sizes!=="undefined"){
        updateData.sizes=sizes
    }


    if(req.files && req.files.length>0){
        const fileUrl=await Promise.all(
        req.files.map(async(file)=>{
            const res=await uploadFile({
                buffer:file.buffer,
                fileName:file.originalname
            })
            return res.url
        })
    )
    updateData.images=fileUrl
    }

    const products=await productModel.findByIdAndUpdate(id,updateData,{new:true})

    if(!products){
        return res.status(404).json({
            message:"product not found"
        })
    }

    return res.status(200).json({
        message:"product update succefully",
        data:products
    })


  

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
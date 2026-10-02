const createProductController=async(req,res)=>{
    try {
         
   const {title,description,category,brand}=req.body

   const fileUrl=await Promise.all(
    req.files.map(async(file)=>{
     const response=await uplo
    })
   )

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
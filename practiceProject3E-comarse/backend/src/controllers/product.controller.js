export const createProductControler=async(req,res)=>{
    try {
        
        console.log(req.body)
        return res.status(201).json({
            message:"product createed"
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
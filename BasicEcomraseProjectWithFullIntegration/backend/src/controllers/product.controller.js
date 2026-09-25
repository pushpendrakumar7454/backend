

export const createProductController=async(req,res)=>{
    try {
        console.log(req.body)
        console.log(req.files)
        return res.status(201).json({
            message:"product creates succefully"
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
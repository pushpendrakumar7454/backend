const createUrlControllers=async(req,res)=>{
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

       

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
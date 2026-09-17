import express from 'express'
import urlRouter from '../router/url.router.js'
import urlModel from '../modules/url.moduls.js'
const app=express()
app.use(express.json())

app.use("/api",urlRouter)

app.get("/:code",async(req,res)=>{
    try {
        const {code}=req.params

        const url=await urlModel.findOne({shortCode:code})

        if(!url){
            return res.status(400).json({
                message:"url not found"
            })
        }

        res.redirect(302,url.orginalUrl)
        await urlModel.findOneAndUpdate(
            {shortCode:code},
            {$inc:{clicks:1}}
        )
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
})

export default app;
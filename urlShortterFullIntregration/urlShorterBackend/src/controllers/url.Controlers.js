import urlModel from "../modules/url.module.js";
import { generateCode } from "../utils/url.utils.js";

export const urlControllers = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "url is required",
      });
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return res.status(400).json({
        message: "please enter a valid URL string with http:// or https://",
      });
    }

    if (url.length > 2048) {
      return res.status(400).json({
        message: "url is too long, please enter a maximum 2048 character url",
      });
    }

    const code = generateCode();

    const newUrl = await urlModel.create({
      orginalUrl: url,
      shortCode: code,
    });

    return res.status(201).json({
      message: "url created successfully",
      data: {
        orginalUrl: newUrl.orginalUrl,
        shortCode: newUrl.shortCode,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal server error",
    });
  }
};


export const findAllUrl=async(req,res)=>{
    try{
        const urls=await urlModel.find()

        return res.status(200).json({
            message:"url featched succefully",
            data:{
                urls
            }
        })
    }catch(error){
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
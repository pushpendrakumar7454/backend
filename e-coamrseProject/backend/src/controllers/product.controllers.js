import productModel from "../modules/product.model.js";
import { uploadFiles } from "../services/storage.service.js";

export const createProductCoontroller = async (req, res) => {
  try {
    const fileUrl = [];
    
    for (let i = 0; i < req.files.length; i++) {
      const response = await uploadFiles({
        buffer: req.files[i].buffer,
        fileName: req.files[i].originalname,
      });

      console.log("IMAGEKIT RESPONSE:", response);

      fileUrl.push(response.url);
    }

    const product = await productModel.create({
      title: req.body.title,
      description: req.body.description,
      price: {
        amount: req.body.price.amount,
        currency: req.body.price.currency,
      },
      sizes: req.body.sizes,
      images: fileUrl,
      seller: req.user.userId,
    });

    return res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.log("CREATE PRODUCT ERROR:", error);

    return res.status(500).json({
      message: "internal server error",
    });
  }
};


export const listALlProducts=async(req,res)=>{
    try {
        const product=await productModel.find()


        return res.status(200).json({
            message:"find all products",
            data:{
                product
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
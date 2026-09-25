import productModel from "../modules/product.module.js";
import { uploadFiles } from "../services/storage.services.js";


export const  createProductController = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

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

export const fildAllProductController=async(req,res)=>{
    try {
         
        const products=await productModel.find()

        return res.status(200).json({
            message:"find all products",
            data:{
                products
            }
        })

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}

export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;

        const products = await productModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!products) {
            return res.status(404).json({
                message: "product not found"
            });
        }

        return res.status(200).json({
            message: "product updated successfully",
            data: products
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error.message
        });
    }
};


export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;

        const products = await productModel.findByIdAndDelete(id);

        if (!products) {
            return res.status(404).json({
                message: "product not found"
            });
        }

        return res.status(200).json({
            message: "product deleted successfully",
            data: products
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error.message
        });
    }
};
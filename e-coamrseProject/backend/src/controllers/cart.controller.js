import productModel from "../modules/product.model.js";
import cartModel from "../modules/cart.model.js";

export const createCartController = async (req, res) => {
  try {
    const { productId, quantity, size } = req.body;

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    const selectedsizes = product.sizes.find((s) => s.size === size);

    if (!selectedsizes) {
      return res.status(400).json({
        message: "invalid size",
      });
    }

    if (selectedsizes.stock < quantity) {
      return res.status(400).json({
        message: "insufficient stock",
      });
    }

   const cart=(await cartModel.findOne({user:req.user.userId}))
    ?? await cartModel.create({user:req.user.userId})


    const isProductInCart=cart.products.find(p=>(p.product.toString()===productId) && (p.size===size))

    if(isProductInCart){
        if((isProductInCart.quantity+quantity)>selectedsizes.stock){
            return res.status(400).json({
                message:"insufficient stock"
            })
            
        }


        await cartModel.updateOne({
            user:req.user.userId,
            "products.product":productId,
            "products.size":size
        },{
          $inc:{
            "products.$.quantity":quantity
          }
        }
      )

      return res.status(200).json({
        message:"product quantity update in cart"
      })
    }

    await cartModel.findOneAndUpdate({
      user:req.user.userId
    },{
      $push:{
        products:{
          product:productId,
          quantity:quantity,
          size:size
        }
      }
    }
  )

  return res.status(200).json({
    message:"product added to cart succefully"
  })
      
    

  } catch (error) {
    return res.status(500).json({
      message: "internal servver error",
    });
  }
};



export const getCart=async(req,res)=>{
    try{

        const cart=(await cartModel.findOne({user:req.user.userId}))
        ?? (await cartModel.create({user:req.user.userId}))

     return res.status(200).json({
        message:"cart received succefully",
        data:{
            cart:cart
        }
     })

    }catch(error){
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
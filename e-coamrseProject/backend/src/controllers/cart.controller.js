import productModel from "../modules/product.model.js";

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
  } catch (error) {
    return res.status(500).json({
      message: "internal servver error",
    });
  }
};

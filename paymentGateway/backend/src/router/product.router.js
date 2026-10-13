
import { Router } from "express";
import crypto from "crypto";

import productModel from "../models/product.model.js";
import razorpayInstance from "../config/razerpay.js";
import paymentModel from "../models/razerpay.module.js";
import { config } from "../config/config.js";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils.js";
const router = Router();

// CREATE RAZORPAY ORDER
router.post("/:productId/order", async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    if (
      !product.price ||
      typeof product.price.amount !== "number" ||
      !product.price.currency
    ) {
      return res.status(400).json({
        message: "Product price or currency is invalid",
      });
    }

    const order = await razorpayInstance.orders.create({
      amount: Math.round(product.price.amount * 100),
      currency: product.price.currency,
      receipt: `order_rcptid_${productId}`,
      notes: {
        productId: productId,
        productTitle: product.title,
      },
    });

    const payment = await paymentModel.create({
      orderId: order.id,
      product: product._id,
      amount: product.price.amount,
      currency: product.price.currency,
      status: "pending",
    });

    return res.status(201).json({
      message: "Order created successfully",
      order,
      payment,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// VERIFY RAZORPAY PAYMENT
// router.post("/verify", async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     } = req.body;

//     if (
//       !razorpay_order_id ||
//       !razorpay_payment_id ||
//       !razorpay_signature
//     ) {
//       return res.status(400).json({
//         status: false,
//         message: "Payment details are required",
//       });
//     }

//     // Check that the order exists in our database
//     const existingPayment = await paymentModel.findOne({
//       orderId: razorpay_order_id,
//     });

//     if (!existingPayment) {
//       return res.status(404).json({
//         status: false,
//         message: "Payment record not found",
//       });
//     }

//     // Get Razorpay secret key from config
//     const secretKey = config.RAZERPAY_SECRET_KEY;

//     if (!secretKey) {
//       console.log("Razorpay secret key is missing in config");

//       return res.status(500).json({
//         status: false,
//         message: "Payment configuration error",
//       });
//     }

//     // Generate expected signature
//     const expectedSignature = crypto
//       .createHmac("sha256", secretKey)
//       .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//       .digest("hex");

//     // Compare signatures safely
//     const expectedBuffer = Buffer.from(expectedSignature, "hex");
//     const receivedBuffer = Buffer.from(razorpay_signature, "hex");

//     const isValidSignature =
//       expectedBuffer.length === receivedBuffer.length &&
//       crypto.timingSafeEqual(expectedBuffer, receivedBuffer);

//     if (!isValidSignature) {
//       return res.status(400).json({
//         status: false,
//         message: "Invalid payment signature",
//       });
//     }

//     // Update payment status
//     const payment = await paymentModel.findOneAndUpdate(
//       {
//         orderId: razorpay_order_id,
//         status: "pending",
//       },
//       {
//         paymentId: razorpay_payment_id,
//         signature: razorpay_signature,
//         status: "complete",
//       },
//       {
//         new: true,
//       }
//     );

//     if (!payment) {
//       const currentPayment = await paymentModel.findOne({
//         orderId: razorpay_order_id,
//       });

//       if (currentPayment && currentPayment.status === "complete") {
//         return res.status(200).json({
//           status: true,
//           message: "Payment already verified",
//           payment: currentPayment,
//         });
//       }

//       return res.status(400).json({
//         status: false,
//         message: "Payment could not be updated",
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       message: "Payment verified successfully",
//       payment,
//     });
//   } catch (error) {
//     console.error("Payment verification error:", error);

//     return res.status(500).json({
//       status: false,
//       message: "Internal server error",
//     });
//   }
// });

router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        message: "Payment details are required",
      });
    }

    const isValid = validatePaymentVerification(
  {
    order_id: razorpay_order_id,
    payment_id: razorpay_payment_id,
  },
  razorpay_signature,
  config.RAZERPAY_SECRET_KEY
);

if (!isValid) {
  return res.status(400).json({
    status: false,
    message: "Invalid payment signature",
  });
}

    if (!isValid) {
      return res.status(400).json({
        status: false,
        message: "Invalid payment signature",
      });
    }

    const payment = await paymentModel.findOneAndUpdate(
      { orderId: razorpay_order_id },
      {
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        status: "complete",
      },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({
        message: "Payment record not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Payment verified successfully",
      payment,
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

export default router;

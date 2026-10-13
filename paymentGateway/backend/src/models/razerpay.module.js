import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
  },
  signature: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "INR",
  },
  user: mongoose.Types.ObjectId,
  ref: "",
  required: true,
  
  status: {
    type: String,
    enum: ["pending", "complete", "failed"],
    default: "pending",
  },
});


const paymentModel=mongoose.model("RAZERPAYmodel",paymentSchema)

export default paymentModel
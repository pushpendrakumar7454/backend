



import Razorpay from "razorpay";
import { config } from "./config.js";

const razorpay = new Razorpay({
  key_id: config.RAZERPAY_KEY_ID,
  key_secret: config.RAZERPAY_SECRET_KEY,
});

export default razorpay;

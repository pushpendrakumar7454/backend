import razorpay from 'razorpay'
import {config} from './config.js'
const razorpayInstance=new razorpay({
  key_id:config.RAZERPAY_KEY_ID,
  key_secret:config.RAZERPAY_SECRET_KEY

})

export default razorpayInstance
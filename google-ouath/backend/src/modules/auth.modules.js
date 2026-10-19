import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required:()=>{
      return !this.googleId
    }
  },
  google:{
   type:String
  },
  refreshToken:{
    type:String
  }
});

const userModel = mongoose.model("googleAuth", authSchema);

export default userModel;

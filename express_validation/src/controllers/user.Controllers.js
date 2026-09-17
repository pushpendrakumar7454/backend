import userModel from "../modules/user.module.js";

export const userRegisterController = async (req, res) => {
  try {
    const { email, password, number } = req.body;

    

    const allreadyExistEmail=await userModel.findOne({email})

    if(allreadyExistEmail){
        return res.status(401).json({
            message:"email allready exist"
        })
    }

    const user = await userModel.create({
      email,
      password,
      number,
    });

    return res.status(201).json({
      message: "user register seccefully",
      data:{
        name:user.name,
        email:user.email,
        id:user._id
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

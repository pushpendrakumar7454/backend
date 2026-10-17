import userModel from '../modules/auth.modules.js'
import bycprt from "bcryptjs";
import {
  createAccessToken,
  createRefreshToken,
  readrefreshToken,
} from "../utils/auth.js";

export const authRegisterController = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const alllreadyExistUser = await userModel.findOne({ email });

    if (alllreadyExistUser) {
      return res.status(400).json({
        message: "email allready exists",
        errors: [
          {
            field: "email",
            message: "user allready exist eith email",
          },
        ],
      });
    }
    const user = await userModel.create({
      email,
      name,
      password: await bycprt.hash(password, 6),
    });

    const { accessToken } = createAccessToken({
      userId: user._id,
    });
    const { refreshToken } = createRefreshToken({
      userId: user._id,
    });

    await userModel.findByIdAndUpdate(user._id, {
      refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "user registered successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const authLoginControllers = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    // User nahi mila
    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    // Password check
    const isValiidPassword = await bycprt.compare(password, user.password);

    if (!isValiidPassword) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    // Generate tokens
    const { accessToken } = createAccessToken({
      userId: user._id,
    });

    const { refreshToken } = createRefreshToken({
      userId: user._id,
    });

    // Save refresh token
    await userModel.findOneAndUpdate({email}, { refreshToken });

    // Set refresh token cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "user login successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
         
        },
        accessToken
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const authrefreshControllers = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            message: "refresh token is required",
        });
    }

    try {
        const decoded = readrefreshToken(refreshToken);
        const { userId} = decoded;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(401).json({
                message: "user not found",
            });
        }

        if (refreshToken !== user.refreshToken) {
            await userModel.findByIdAndUpdate(user._id, {
                refreshToken: null,
            });

            return res.status(401).json({
                message: "refresh mismatch",
            });
        }

        const { accessToken } = createAccessToken({
            userId: user._id,
          
        });

        const { refreshToken: newRefreshToken } =
            createRefreshToken({
                userId: user._id,
          
            });

        await userModel.findByIdAndUpdate(user._id, {
            refreshToken: newRefreshToken,
        });

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
        });

        return res.status(200).json({
            message: "token rotated successfully",
            accessToken,
            data: {
                user: {
                    name: user.name,
                    email: user.email,
                    id: user._id,
                },
                
            },
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "internal server error",
        });
    }
};


export const authMeControllers=async(req,res)=>{
    try {
        
   
        const {userId}=req.user

        const user=await userModel.findById(userId)

        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }

        return res.status(200).json({
            message:"user find succefully",
            data:{
                user:{
                    name:user.name,
                    email:user.email
                }
            }
        })

    } catch (error) {
        return res.status(500).json({
            messsage:"internal sever error"
        })
    }
}
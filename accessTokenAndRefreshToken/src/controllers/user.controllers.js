import userModel from "../module/user.module.js";
import bcrypt from "bcryptjs";
import { generateTokens, varifyrefreshToken } from "../utils/auth.js";

export const registerUserController = async(req, res) => {
    try {
        const { email, name, password } = req.body;

        const alreadyExistUser = await userModel.findOne({ email });

        if (alreadyExistUser) {
            return res.status(400).json({
                message: "Email already exists",
                errors: [{
                    field: "email",
                    message: "User already exists"
                }]
            });
        }

        const user = await userModel.create({
            name,
            email,
            hashPassword: await bcrypt.hash(password, 10)
        });

        const { accessToken, refreshToken } = generateTokens({
            userId: user._id
        });

        user.refreshToken = refreshToken
        await user.save()

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true
        });

        return res.status(201).json({
            message: "User registered successfully",
            data: {
                user: {
                    name: user.name,
                    email: user.email
                },
                accessToken
            }
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


export const meUserController = async(req, res) => {
    try {
        res.status(200).json({
            message: "user find sucefully",
            data: {
                user: req.user
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}


export const refreshUserController = async(req, res) => {
    const refressToken = req.cookies.refreshToken;

    if(!refressToken){
        return res.status(400).json({
            message:"refresh token not found"
        });
    }

    try{
        const decoded = await varifyrefreshToken(refressToken);

        const user = await userModel.findById(decoded.id);

        if(!user){
            return res.status(404).json({
                message:"user not found"
            });
        }

        if(refressToken !== user.refreshToken){
            user.refreshToken = null;
            await user.save();

            return res.status(401).json({
                message:"Unauthorized refresh token mismatch"
            });
        }

        const {accessToken, refreshToken:newreFreshToken} = generateTokens({
            userId:user._id
        });

        res.cookie("refreshToken",newreFreshToken, {
            httpOnly:true
        });

        user.refreshToken =newreFreshToken;
        await user.save();

        res.status(200).json({
            message:"token resfesh succefully",
            accessToken
        });

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"internal server error"
        });
    }
}
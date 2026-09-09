import userModel from "../module/user.module.js";
import bcrypt from "bcryptjs";
import { generateTokens } from "../utils/auth.js";

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
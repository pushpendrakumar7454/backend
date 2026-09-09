import userModel from "../module/user.module.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from "../config/confg.js"
import { generateTokens } from "../utils/auth.js"

export const registerUserController = async(req, res) => {
    try {
        const { email, name, password } = req.body
        const allredyExistUser = await userModel.findOne({ email })
        if (allredyExistUser) {
            return res.status(400).json({
                message: "email allredy exist",
                errors: [{
                    field: email,
                    message: "user allready exist"
                }]
            })
        }


        const user = await userModel.create({
            name,
            email,
            hashPassword: await bcrypt.hash(password, 10)
        })
        const { accessToken, refreshToken } = generateTokens({ userId: user._id })

        return res.status(201).json({
            messgae: "user register seccufully",
            data: {
                user
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}
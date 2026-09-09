import userModel from "../module/user.module.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from "../config/confg.js"

export const registerUserController = async(req, res) => {
    try {
        const { email, name, password } = req.body
        const allredyExistUser = await userModel.findOne({ email })
        if (allredyExistUser) {
            return res.status(401).json({
                message: "email allredy exist"
            })
        }

        let token = jwt.sign({ id: user._id }, config.JWT_ACCESS_TOKEN)

        const user = await userModel.create({
            name,
            email,
            hashPassword: await bcrypt.hash(10, password)
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}
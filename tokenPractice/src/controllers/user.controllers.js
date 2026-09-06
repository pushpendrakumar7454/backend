import jwt from 'jsonwebtoken'
import userModel from '../module/user.model.js'
import bcrypt from 'bcrypt'
import { config } from '../config/config.js'

export const createUserControllters = async(req, res) => {
    try {

        const { name, email, password } = req.body
        if (!email || !name || !password) {
            return res.status(401).json({
                message: "user invalid"
            })
        }

        const isEmaillAllreadyExist = await userModel.findOne({ email })
        if (isEmaillAllreadyExist) {
            return res.status(401).json({
                message: "email allready exist"
            })
        }


        const user = await userModel.create({
            email,
            name,
            password: await bcrypt.hash(password, 10)
        })
        const token = jwt.sign({ id: user._id }, config.JWT_ACCESS_TOKEN)

        return res.status(201).json({
            message: "user created succefully",
            data: {
                user: {
                    name,
                    email,
                    id: user._id
                },
                token
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}
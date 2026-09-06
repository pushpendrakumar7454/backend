import jwt from 'jsonwebtoken'
import userModel from '../module/user.model.js'
import bcrypt from 'bcrypt'
import { config } from '../config/config.js'
import { authenticate } from '../../../token/src/middleware/user.midleware.js'

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


export const findUserControllters =
    (req, res) => {
        try {
            console.log(req.user)
            return res.status(200).json({
                message: "user find succefully",
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
export const loginUserControllers = async(req, res) => {
    try {
        const { email, name, password } = req.body

        const user = await userModel.findOne({ email })
        const isValidPassword = bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({
                message: "invalid user"
            })
        }
        const token = jwt.sign({ id: user._id }, config.JWT_ACCESS_TOKEN)
        res.status(200).json({
            message: "user log in successfuly",
            data: {
                user: user.email,
                name: user.name
            },
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}
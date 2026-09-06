import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'
import userModel from '../module/user.model.js'

export const userAuthenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({
                message: "invalid user"
            })
        }

        const data = jwt.verify(
            token,
            config.JWT_ACCESS_TOKEN
        )

        const user = await userModel.findById(data.id)

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        req.user = user

        next()

    } catch (error) {
        console.log(error)

        return res.status(401).json({
            message: "invalid or expired token"
        })
    }
}
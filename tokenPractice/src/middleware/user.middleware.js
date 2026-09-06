import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'
import userModel from '../module/user.model.js'

export const userAuthenticate = async(req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: "inaliid user"
        })
    }

    const data = jwt.verify(token, config.JWT_ACCESSTOKEN)
    const user = await userModel.findById(data.id)

    req.user = user
    next()


}
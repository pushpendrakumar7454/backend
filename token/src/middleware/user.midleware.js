import jwt from 'jsonwebtoken'
import userModel from '../module/user.model.js'

export const authenticate = async(req, res, next) => {

    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: "ttoken not found"
        })
    }

    const data = jwt.verify(token, "7d35f95bbb71aa61a7ca6b74ca22974c1909b7bb432ab9d2379843fc63d697fcf9e5b4da8122062b")

    const user = await userModel.findById(data.id)

    req.user = user
    next()
}
import jwt from 'jsonwebtoken'
import { config } from '../config/confg.js'

export const generateTokens = ({ userId }) => {
    const accessToken = jwt.sign({ id: userId }, config.JWT_ACCESS_TOKEN, { expiresIn: "15m" })
    const refreshToken = jwt.sign({ id: userID }, config.JWT_REFRESS_TOKEN, { expiresIn: "7d" })
    return { accessToken, refreshToken }
}
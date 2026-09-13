import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'

export const generateToken=({userId})=>{
    const accessToken=jwt.sign({id:userId},config.ACCESS_TOKEN)
    const refreshToken=jwt.sign({id:userId},config.REFRESH_TOKEN)

    return {
        accessToken,
        refreshToken
    }
}
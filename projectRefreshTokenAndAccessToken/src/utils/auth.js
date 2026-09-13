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


export const varifyAccessToken=(token)=>{
    const decoded=jwt.verify(token,config.ACCESS_TOKEN)
    return decoded
}

export const refreshToken=()=>{
    const decoded=jwt.verify(token,config.REFRESH_TOKEN)
    return decoded
}
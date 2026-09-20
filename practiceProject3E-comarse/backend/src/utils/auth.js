import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'


export const generateAccesToken=({userId,role})=>{
    const accessToken=jwt.sign({userId,role},config.ACCESS_TOKEN,{expiresIn:"15m"})
    return accessToken
}

export const generateRefreshToken=({userId,role})=>{
    const refreshToken=jwt.sign({userId,role},config.REFRESH_TOKEN,{expiresIn:"7d"})
    return refreshToken
}


export const readAccessToken=(accessToken)=>{
    return jwt.verify(accessToken,config.ACCESS_TOKEN)
}

export const readRefreshToken=(refreshToken)=>{
    return jwt.verify(refreshToken,config.REFRESH_TOKEN)
}


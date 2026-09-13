import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'

export const generateToken=({userId})=>{
    const accessToken=jwt.sign({id:userId},config.ACCESS_TOKEN,{expiresIn:"15m"})
    const refreshToken=jwt.sign({id:userId},config.REFRESH_TOKEN,{expiresIn:"15d"})
    return {accessToken,refreshToken}
}
export const varifyaccessToken=(token)=>{
    const decoded=jwt.verify(token,config.ACCESS_TOKEN)
    return decoded
}

export const varifyRefreshToken=(token)=>{
    const decoded=jwt.verify(token,config.REFRESH_TOKEN)
    return decoded
}
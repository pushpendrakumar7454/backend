import jwt from 'jsonwebtoken'
import { config } from '../config/config'


export const createAccessToken=({userId})=>{
    return jwt.sign({userId},config.ACCESS_TOKEN,{expiresIn:'15m'})
    
}

export const generateRefreshToken=({userId})=>{
    return jwt.sign({userId},config.REFRESH_TOKEN,{expiresIn:"7d"})
}
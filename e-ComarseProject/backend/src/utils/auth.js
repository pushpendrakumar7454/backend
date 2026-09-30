import jwt from 'jsonwebtoken'
import { config } from '../config/config'

export const generateAccessToken=({userId,role})=>{
    return jwt.sign({userId,role},config.ACCEESS_TOKEN,{expiresIn:"15m"})
}

export const generateRefreshToken=({userId,role})=>{
    return jwt.sign({userId,role},config.REFRESH_TOKEN,{expiresIn:"7d"})
}
import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'


export const readAccessToken=(userId)=>{
    return jwt.sign({userId},config)
}
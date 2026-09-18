import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'


export const generateUserToken=({userId})=>{
    const accessToken=jwt.sign({id:userId},config.ACCESS_TOKEN,{expiresIn:'15m'})
    const refreshToken=jwt.sign({id:userId},config.REFRESH_TOKEN,{expiresIn:"15d"})

    return {accessToken,refreshToken}
}
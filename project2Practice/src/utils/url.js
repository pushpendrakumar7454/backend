import crypto from 'crypto'

export const generateCode=()=>{
    return crypto.randomBytes(6).toString().slice(0,6)
}
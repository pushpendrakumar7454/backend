import ImageKit, { toFile } from '@imagekit/nodejs'
import {config} from '../config/config.js'


const client=new ImageKit({
    privateKey:config.IMAGEKIT_PRIVATE_KEY
})


export const uploadFiles=async({buffer,fileName})=>{
    const responce=await client.files.upload({
        file:await toFile(buffer),
        fileName:fileName,
        folder:"e-comrase"
    })
    return responce
}
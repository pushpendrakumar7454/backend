import ImageKit, { toFile } from '@imagekit/nodejs'
import { config } from '../config/config.js'

const client=new ImageKit({
    privateKey:config.PRIVATE_IMAGEKIT_KEY
})

export const uploadFile=async({buffer,fileName})=>{

    const responce=await client.files.upload({
        file:await toFile(buffer),
        fileName:fileName,
        folder:"image"
    })
    return responce
}
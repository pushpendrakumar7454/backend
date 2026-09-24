import ImageKit, { toFile } from '@imagekit/nodejs'
import { config } from '../config/config'

const client=new ImageKit({
    privateKey:config.IMAGEKIT_PRIVATE_KEY
})


export const uploadFiles=async({buffer,fileName})=>{
       const response=await client.files.upload({
        file:await toFile(buffer),
        fileName:fileName
       })
       return response
}
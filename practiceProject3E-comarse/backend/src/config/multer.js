import multer from "multer";


const storage=multer.memoryStorage()
const upload=multer({
    storage,
    limits:{
        files:5,
        fileSize:1*2024*2024
    }
})

export default upload
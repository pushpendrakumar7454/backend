const express = require("express")
const { createPostController } = require("../controllers/insta.controllers")
const upload = require("../config/multer")

const router = express.Router()



router.post('/create', upload.single("image"), createPostController)
module.exports = router
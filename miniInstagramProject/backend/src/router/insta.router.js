const express = require("express")
const { createPostController, getAllPostControllers } = require("../controllers/insta.controllers")
const upload = require("../config/multer")

const router = express.Router()



router.post('/create', upload.single("image"), createPostController)
router.get("/getallposts", getAllPostControllers)
module.exports = router
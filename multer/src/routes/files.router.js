const express = require("express")
const { createFileControllers } = require("../controllers/file.controller")
const upload = require("../config/multer")

const router = express.Router()

router.post("/", upload.single('image'), createFileControllers)

module.exports = router
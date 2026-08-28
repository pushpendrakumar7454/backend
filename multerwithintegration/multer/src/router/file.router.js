const express = require("express")
const upload = require("../config/multer")
const createFileControllers = require("../controllers/file.controllers")

const router = express.Router()

router.post("/", upload.single("image"), createFileControllers)

module.exports = router
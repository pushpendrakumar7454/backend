const express = require("express")
const upload = require("../config/multer")
const createFileControllers = require("../controllers/file.controllers")
const file = require("../config/multertwo")

const router = express.Router()

router.post("/data", upload.single("image"), createFileControllers)
router.post("/", file.single("image"), createFileControllers)

module.exports = router
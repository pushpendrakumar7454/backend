const express = require("express")
const { createPostController } = require("../controllers/insta.controllers")

const router = express.Router()



router.post('/create', createPostController)
module.exports = router
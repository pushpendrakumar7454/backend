const express = require("express")
const upload = require("../config/multer")

const router = express.Router({})

router.post("/", upload.single("image"), async(req, res) => {
    try {
        const body = req.body
        const file = req.file
        console.log(file)
        console.log(body)
        res.status(200).json({
            message: "not created"
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = router
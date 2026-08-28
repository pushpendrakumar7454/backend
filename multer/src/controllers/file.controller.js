const upload = require("../config/multer")

const createFileControllers =
    async(req, res) => {
        try {
            const file = req.file;
            console.log(file)
            return res.status(200).json({
                message: "file createed succefully"
            })
        } catch (error) {
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }

module.exports = { createFileControllers }
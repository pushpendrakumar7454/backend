const multer = require("multer");

const storage = multer.memoryStorage()

const file = multer({ storage })
module.exports = file
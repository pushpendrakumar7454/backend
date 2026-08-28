const createFileControllers = async(req, res) => {
    try {
        const file = req.file
        console.log(file)
        res.status(200).json({
            message: "file create succefully"
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }

}

module.exports = createFileControllers
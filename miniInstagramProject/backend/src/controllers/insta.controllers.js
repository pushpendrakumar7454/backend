const createPostController = async(req, res) => {

    try {
        const { body } = req.body
    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}
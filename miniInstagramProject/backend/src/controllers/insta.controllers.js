const instaPost = require("../module/inta.module");

const createPostController = async(req, res) => {
    try {
        const { caption, image } = req.body;

        const posts = await instaPost.create({
            caption,
            image
        });

        res.status(201).json({
            message: "post created successfully",
            data: posts
        });
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        });
    }
};

module.exports = { createPostController };
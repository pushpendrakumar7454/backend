const instaPost = require("../module/inta.module");
const sendFiles = require("../services/storage.services");

const createPostController = async(req, res) => {
    try {
        const { caption } = req.body;
        const file = req.file;

        if (!caption || !file) {
            return res.status(400).json({
                message: "fields are required",
                success: false
            });
        }

        // Upload image to ImageKit
        const uploadImage = await sendFiles(
            file.buffer,
            file.originalname
        );

        // Save post in MongoDB
        const post = await instaPost.create({
            caption,
            image: uploadImage.url
        });

        return res.status(201).json({
            message: "post created successfully",
            success: true,
            data: post
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error.message
        });
    }
};

module.exports = { createPostController };
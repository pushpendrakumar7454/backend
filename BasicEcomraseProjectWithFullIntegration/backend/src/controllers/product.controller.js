export const createProductController = async (req, res) => {
    try {
        console.log("Product Data:", req.body);
        console.log("Product Images:", req.files);

        return res.status(201).json({
            message: "Product created successfully",
            data: {
                product: req.body,
                images: req.files
            }
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
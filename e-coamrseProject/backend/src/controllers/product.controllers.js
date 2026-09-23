export const createProductCoontroller = async (req, res) => {
    try {
        console.log(req.body);

        return res.status(201).json({
            message: "Product created successfully",
            data: req.body
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        });
    }
};
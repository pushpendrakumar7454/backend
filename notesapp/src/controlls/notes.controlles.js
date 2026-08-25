const notesControlles = () => {
    async(req, res) => {
        try {
            const { title, description } = req.body
            const notes = await notesApp.create({
                title,
                description
            })

            return res.status(201).json({
                message: "notes create succefully",
                data: notes
            })
        } catch (error) {
            console.log("error post", error)
        }


    }
}
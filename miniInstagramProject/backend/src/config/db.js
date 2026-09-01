const { default: mongoose } = require("mongoose")

const connectDb = async() => {
    try {
        await mongoose.connect("mongodb+srv://pushpendrakumar7454981358_db_user:cohort3@cohort3.dneyjgs.mongodb.net/")
        console.log("connect DB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb
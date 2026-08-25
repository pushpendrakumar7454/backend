const { default: mongoose } = require("mongoose");


const connectDb = async() => {
    try {
        await mongoose.connect("mongodb+srv://pushpendrakumar7454981358_db_user:cohort3@cohort3.dneyjgs.mongodb.net/")
        console.log("connect mongodb")
    } catch (error) {
        console.log("error of connectDB", error)
    }
}

module.exports = connectDb;
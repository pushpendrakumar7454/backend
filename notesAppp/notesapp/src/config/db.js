const { default: mongoose } = require("mongoose");


const connectDb = async() => {
    try {
        await mongoose.connect(process.env.mongodb_url)
        console.log("connect mongodb")
    } catch (error) {
        console.log("error of connectDB", error)
    }
}

module.exports = connectDb;
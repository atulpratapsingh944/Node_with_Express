const mongoose = require("mongoose");

let connectDB = async () => {
    await mongoose.connect(process.env.MONGODB);
    console.log("database connected....");
};

module.exports = connectDB;

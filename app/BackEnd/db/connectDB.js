const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.connectionString);
        console.log(`DB connected to Host : ${response.connection.host}`);
    } catch (error) {
        console.log(`DB connecting Error : ${error.message}`);
    }
};

module.exports = connectDB;
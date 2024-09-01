//This file will manage the connection to the mongodb database
//backend/src/config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { connect } = require('http2');

dotenv.config();

const connectDB = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB has been connected");
    } catch(err) {
        console.error("Error connecting to MongoDB:", err.message); //err.message gives us information on what kind of error occured as well. 
        process.exit(1);
    }
};

module.exports = connectDB;


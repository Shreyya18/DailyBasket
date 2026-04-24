const mongoose = require('mongoose');
const CONNECTION_URL = 'mongodb://localhost:27017/grocery_db';

const dbConnection = async ()=>{
    try {
        await mongoose.connect(CONNECTION_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

module.exports = dbConnection;
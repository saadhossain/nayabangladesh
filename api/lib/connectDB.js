const mongoose = require("mongoose");
require('dotenv').config();

const connectBD = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@nayabangladesh.wdmng.mongodb.net/NayaBangladesh?retryWrites=true&w=majority&appName=NayaBangladesh`);
        console.log('Connected to Database');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectBD;
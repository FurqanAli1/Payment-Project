const express = require('express');
const mongoDb = require('mongoose');
const envirnment = require('dotenv');

envirnment.config();

const app = express();

const connectMongo = async () => {
    try {
        await mongoDb.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        }); 
        console.log('MongoDB connected:')
    } catch (error) {
        console.log('Connection to MongoDB refused',error.message)
    }
}
connectMongo();

app.listen(process.env.PORT || 4000, () => console.log(`Listening on port: ${process.env.PORT || 4000}`));
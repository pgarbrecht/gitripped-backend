//Set up express as the server
const express = require('express');
const app = express();

//Environment variables
require('dotenv').config();
const PORT = process.env.PORT;

//Connect to Mongoose server
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log(`Mongodb connected at ${db.host}:${db.port}`)
})
.catch((err)=>console.log(err))
// establishing the connection between MongoDB Atlas

// Default route
app.get('/exercises', (req, res) => {
    const today = new Date();
    res.send('server working');
 });

//Confirmation server is working
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
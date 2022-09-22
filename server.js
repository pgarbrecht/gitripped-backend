//Set up server variables/external modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');

//require model
const Exercise = require('./models/Exercise.js')

//INTERNAL MODULES
const routes = require('./routes')

//ROUTES
app.use('/exercises', routes.exercises)
//👆sending the default route over to the controller
//can add additional controllers here

//Environment variables
require('dotenv').config();
const PORT = process.env.PORT;

//MIDDLEWARE
app.use(express.json())
//body data middleware
app.use(express.urlencoded({extended: true}))
//method override Middleware
app.use(methodOverride("_method"))
//serve public files

//Connect to Mongoose server
const mongoose = require('mongoose');
const db = mongoose.connection;

// establishing the connection between MongoDB Atlas
mongoose
.connect(process.env.MONGODB_URI, { useNewUrlParser: true})
.then(()=>{
    console.log(`Mongodb connected at ${db.host}:${db.port}`)
})
.catch((err)=>console.log(err))

//Confirmation server is working
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
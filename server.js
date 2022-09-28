//Set up server variables/external modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');

//require model
const Exercise = require('./models/Exercise.js')

//INTERNAL MODULES
const routes = require('./routes')

//ROUTES
//this makes all routes start with /exercises on local or deployed at heroku
app.use('/exercises', routes.exercises)
//👆sending the default route over to the controller
//can add additional controllers here

//Environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Setup Cors middleware
const whitelist = ['http://localhost:3000', `${process.env.FRONTEND_URL}`];
const corsOptions = {
	origin: (origin, callback) => {
		console.log(whitelist, "WHITELIST")
		console.log(origin, "ORIGIN")
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	// This is needed for accept credentials from the front-end
	// not needed if we do not implementing authentication
	// credentials: true,
};

app.use(cors(corsOptions));

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
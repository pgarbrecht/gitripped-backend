//Set up server variables/external modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');

//require model
const Exercise = require('./models/Exercise.js')

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

mongoose
.connect(process.env.MONGODB_URI, { useNewUrlParser: true})
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

//seed route

// app.get('/seed', async (req, res) => {
//     const newExercises = [
//         {name: "squat",
//         description: "lower body exercise with barbell",
//         exerciseImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Squats.svg/2560px-Squats.svg.png",
//         muscles: "gluts/legs",
//         notes: "recommended weight: 150 lbs.",
//         }, 
//         {name: "bench press",
//         description: "upper body exercise with barbell",
//         exerciseImage: "https://www.taylorsstrength.co.uk/wp-content/uploads/2017/11/Rec-Bench-Press.jpg",
//         muscles: "chest/upper back",
//         notes: "recommended weight: 200 lbs.",
//         }, 
//     ]
//     try {
//         const seedItems = await Exercise.create(newExercises)
//         res.send(seedItems)
//     }
//     catch (err) {
//         res.send(err.message)
//     }
//     })

//Confirmation server is working
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
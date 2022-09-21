//Set up express as the server
const express = require('express');
const app = express();

//Environment variables
require('dotenv').config();
const PORT = process.env.PORT;

// Default route
app.get('/exercises', (req, res) => {
    const today = new Date();
    res.send('server working');
 });

//Confirmation server is working
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
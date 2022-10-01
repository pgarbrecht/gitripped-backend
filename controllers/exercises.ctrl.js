const db = require('../models')

//index route shows all exercises data in the database as a json
const index = (req, res) => {
    db.Exercise.find(
        {}, (error, allExercises) => {
        if(error) return res.status(400).json({ error: error.message });
  
        return res.status(200).json({
            allExercises,
            requestedAt: new Date().toLocaleString()
        }); 
    });
};

// create a POST route to create new exercised 
const create = (req, res) => {
    db.Exercise.create(
        req.body, (error, createdExercise) => {
            if(error) return res.status(400).json({ error: error.message });
            return res.status(200).json(createdExercise)
            console.log(createdExercise)
            
        }
    )
    // res.redirect('http://localhost:3000/')
}

//put route
const update = (req, res) =>{
    db.Exercise.findByIdAndUpdate(req.params.id,
        {
            $set: req.body
        },
        {new: true},
        (err, updatedExercise) => {
            if(err) return res.status(400).json({error: err.message})
            return res.status(200).json(updatedExercise) 
        }
    )
}

module.exports = {
    index,
    create,
    update,
    // destroy
}
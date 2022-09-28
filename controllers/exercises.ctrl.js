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

module.exports = {
    index,
    // create,
    // update,
    // destroy
}
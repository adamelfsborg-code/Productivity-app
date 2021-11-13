// ----- IMPORTS ----- \\

const con = require('./db');

// ----- CONTROLLERS ----- \\

const getSchedule = (req,res) => {
  try {
    con.query('SET search_path = schedule; SELECT ');
  } catch (err) {
    console.error(err)
    res.status(500).json({message: err})
  }
}

const editSchedule = (req,res) => {
  try {
    
  } catch (error) {
    console.error(err)
    res.status(500).json({message: err})  
  }
}

const deleteSchedule = (req,res) => {
  try {
    const { userId } = req.body;
  } catch (error) {
    console.error(err)
    res.status(500).json({message: err})    
  }
}

// ----- EXPORTS ----- \\

module.exports = {
  getSchedule,
  editSchedule,
  deleteSchedule
}
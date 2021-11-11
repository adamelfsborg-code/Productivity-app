// ----- CONTROLLERS ----- \\

const getSchedule = (req,res) => {
  try {
    
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

module.exports = {
  getSchedule,
  editSchedule,
  deleteSchedule
}
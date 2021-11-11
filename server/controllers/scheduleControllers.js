// ----- CONTROLLERS ----- \\

const getSchedule = (req,res) => {
  try {
    
  } catch (err) {
    console.error(err)
    res.status(500).json({message: err})
  }
}

module.exports = {
  getSchedule
}
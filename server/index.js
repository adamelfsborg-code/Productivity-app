// ----- PACKAGES & IMPORTS ----- \\

const express = require('express');
const cors = require('cors');
const app = express();
const { scheduleRoutes } = require('./routes');

const PORT = process.env.PORT || 5000;
const VERSION = process.env.VERSION || 1
// ----- MIDDLEWARES ----- \\

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// ----- MIDDLEWARES ROUTES ----- \\

app.use(`/api/${VERSION}/schedule`, scheduleRoutes);

// ----- NO ROUTE FOUND ----- \\

app.use((req, res, next)=>{
  res.status(404).send({message:"404 - PAGE NOT FOUND"});
});

// ----- START SERVER ----- \\

app.listen(PORT, () => {
  console.log(`Server is up on PORT:${PORT}`)
})
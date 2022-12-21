const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors);

const server = app.listen(PORT, ()=>{
  console.log(`Server running at PORT: ${PORT}.`);
})
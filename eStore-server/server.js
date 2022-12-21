const express = require('express');
const cors = require('cors');

const app = express();

const productsRoutes = require('./Routes/productsRoutes')

const PORT = 5000;

// app.use(express.json());
// app.use(cors);

app.get('/', (req, res)=>{
  res.status(200).send('hello');
})

app.use('/api/products', productsRoutes);

const server = app.listen(PORT, ()=>{
   console.log(`Server is running on PORT: ${PORT}`)
})
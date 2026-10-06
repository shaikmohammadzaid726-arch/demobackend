require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/about',(req,res)=>{
    res.send('MY NAME IS SHAIK ANNAVARAM MOHAMMAD ZAID ,IM LEARNING BACKEND ')
})
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
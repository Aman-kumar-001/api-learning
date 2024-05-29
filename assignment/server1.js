const express = require('express');
const app = express();
const port = 8000;
const data = require('./data.js');

app.get('/' , (req,res) =>{
    res.json(data);
})

app.listen(port , ()=>{
    console.log(`Server started at ${port}`);
})


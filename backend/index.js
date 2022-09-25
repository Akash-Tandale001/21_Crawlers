const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.REACT_APP_PORT;

app.get('/api',(req,res)=>{
    res.json({
        message:"Welcome to crawler"
    });
})

app.listen(port,()=>{
    console.log(`server running  on  ${port}`);
})
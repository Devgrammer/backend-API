const  express = require('express');
const http = require('http')
const cors = require("cors")

const app = express();

const port =process.env.PORT || 3000;

app.use(cors());


app.get("/", (req, res)=>{
    res.send('m alive')
})

app.listen(port , ()=>{
    console.log('hello , world')
})
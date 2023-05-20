const express = require("express");
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/", (req, res)=>{
    res.send("Welcome To Home Page")
})



app.listen(PORT, (req, res)=>{
    console.log(`http://localhost:${PORT}`)
})
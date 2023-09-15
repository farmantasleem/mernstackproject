const express = require("express")
const connectiontoDB = require("./config/connectiontoDB")
require("dotenv").config()
const app = express()

app.get("/",(req,res)=>{
        res.status(200).send({msg:"Server has been setup",data:"Exicited for this??"})
})
// connection to db

connectiontoDB()
app.listen(8081,()=>{
    console.log("Server has started Successfully")
})
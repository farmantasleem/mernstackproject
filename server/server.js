const express = require("express")

const app = express()

app.get("/",(req,res)=>{
        res.status(200).send({msg:"Server has been setup",data:"Exicited for this??"})
})

app.listen(8081,()=>{
    console.log("Server has started Successfully")
})
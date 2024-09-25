const express = require("express");
const app =express();

let port = 3000;

app.listen(port,()=>
{
    console.log(`app is listening on port ${port}`)
})


app.use((req,res)=>
{
    // console.log(req);
    console.log("incoming request")
    res.send("Hi this is basic response")
})
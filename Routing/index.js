const express = require("express");
const app= express();

let port =3000;

app.listen(port,()=>
{
    console.log(`app is listening to ${port}`);

})


app.get("/",(req,res)=>
{
    res.send("You contacted root path");
})

app.get("/apple",(req,res)=>
{
        res.send("You contacted apple path");
        
})

app.get("/banana",(req,res)=>
{
            res.send("You contacted banana path");
})


app.get("*",(req,res)=>
{
    res.send("this path does not exist");
})
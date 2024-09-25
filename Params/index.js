const express  = require("express");
const app = express();

let port =3000;
app.listen(port,()=>
{
    console.log(`app is listening to ${port}`);
})


app.get("/:username/:id",(req,res)=>
{
    let {username, id}=req.params
    res.send(`welcome to the page of @${username}`);
})


// now when we seach for http:localhost:3000/uju/123
// we get response as welcome to the page of @uju

app.get("/search",(req,res)=>
{
    let {q} = req.query;
    if(!q)
    {
        res.send(`<h1>Nothing searched </h1>`);
    }
    else{
    res.send(`<h1>Search from query are ${q} </h1>`);
    }
}
)

// when we use console.log(req.uery)
// http://localhost:3000/search?query="apple"&q="mango"
// { query: '"apple"', q: '"mango"\n' } we get this in colde

// when we use q
// http://localhost:3000/search?q="apple"&q="mango"
// serach results are "apple","mango"
const express = require("express");

let app = express();

app.get("/", (req, res)=>{
    res.send("hello from express");
});

const server = app.listen(8080, ()=>{
    console.log(`Starting from scratch on port ${server.address().port}`);
});


const express = require("express");

let app = express();

// static folder
app.use(express.static("public"));
// views folder
app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    //res.send("hello from express");
    res.render("home");
});

const server = app.listen(8080, ()=>{
    console.log(`Starting from scratch on port ${server.address().port}`);
});


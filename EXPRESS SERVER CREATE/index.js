const express = require("express");
const app = express();
app.get("", (req, res) => {
    res.send("welcome "+req.query.name);
});

app.get("/about", (req, res) => {
    res.send("I AM about PAGE")
});
app.get("/contact", (req, res) => {
    res.send("I AM conatact PAGE")
});
app.get("/login", (req, res) => {
    res.send("I AM login")
});

app.listen(8080);
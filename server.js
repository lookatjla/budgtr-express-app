const exp = require("constants");
const express = require("express");
const app = express();


PORT = 3005;


app.get("/", (req, res) => {
    res.send("hello world");
})


app.get("/publicfile", (req, res) => {
    res.sendFile('/Users/jaylayoung/Desktop/seir-turmeric-class/deliverables/budgtr-express-app/public');
})


app.listen(3005, () => {
    console.log("server is running!")
});
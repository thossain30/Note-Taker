const path = require("path");
const app = require("express").Router();
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../../notes.html"));
});

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

module.exports = app;

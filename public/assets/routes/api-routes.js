const notes = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

notes.get("/notes", (req, res) => {
    // data is reading from db.json
    let data = fs.readFileSync(path.join(__dirname, '../../../db/db.json'));
    res.send(JSON.parse(data));
})
// db\db.json
// public\assets\routes\api-routes.js

notes.post("/notes", (req, res) => {
    let data = fs.readFileSync(path.join(__dirname, '../../../db/db.json'));
    let curnotes = JSON.parse(data);
    console.log(curnotes);
    const {title, text} = req.body;
    const newNote = {
        title,
        text,
        id:uuidv4()
    };
    curnotes.push(newNote);
    // writing new note to db.json
    fs.writeFileSync(path.join(__dirname, '../../../db/db.json'));
    res.send(newNote);
    res.send('Note sent!');
});

module.exports = notes;
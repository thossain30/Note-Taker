const notes = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

notes.get("/notes", (req, res) => {
    // data is reading from db.json
    let data = fs.readFileSync(path.join(__dirname, '../../../db/db.json'));
    res.send(JSON.parse(data));
})

notes.post("/notes", (req, res) => {
    let data = fs.readFileSync(path.join(__dirname, '../../../db/db.json'));
    let curnotes = JSON.parse(data);
    const {title, text} = req.body;


    const newNote = {
        title,
        text,
        id:uuidv4()
    };
    curnotes.push(newNote);
    // writing new note to db.json
    fs.writeFileSync(path.join(__dirname, '../../../db/db.json'), JSON.stringify(curnotes));
    res.send(curnotes);
    res.send('Note sent!');
});

module.exports = notes;
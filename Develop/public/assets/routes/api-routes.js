const notes = require("express").Router();
const fs = require("fs");
const path = require("path");

const { v4: uuidv4 } = require('uuid');

notes.get("api/notes", (req, res) => {
    let data = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    res.send(JSON.parse(data));
})
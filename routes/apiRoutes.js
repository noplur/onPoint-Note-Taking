const { v4: uuidv4 } = require('uuid');
const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
    fs.readFile ("db/db.json", "UTF-8", (err, data) => {
        if (err) {
            throw err
        }
        const notes = JSON.parse (data);
        res.json(notes)
    })
});

router.post("/", (req, res) => {
    fs.readFile ("db/db.json", "UTF-8", (err, data) => {
        if (err) {
            throw err
        }
        const notes = JSON.parse (data);
        const note = req.body
        note.id = uuidv4()
        notes.push(note)
        fs.writeFile ("db/db.json", JSON.stringify(notes), (err, data) => {
            if (err) {
                res.json(err);
            } 
        res.json(note) 
    })
})
});




module.exports  = router;
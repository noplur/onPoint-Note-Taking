const { v4: uuidv4 } = require('uuid');
const router = require("express").Router();
const fs = require("fs");

// gets the data from db.json, reads the files and parses the data

router.get("/notes", (req, res) => {
    fs.readFile ("db/db.json", "UTF-8", (err, data) => {
        if (err) {
            throw err
        }
        const notes = JSON.parse (data);
        // function to send a response of the parameter converted to a JSON string
        res.json(notes)
    })
});

// posts data into db.json and adds a unique idea by reading the files and parsing the data then adding the id.

router.post("/notes", (req, res) => {
    fs.readFile ("db/db.json", "UTF-8", (err, data) => {
        if (err) {
            throw err
        }
        const notes = JSON.parse (data);
        const note = req.body
        note.id = uuidv4()
        notes.push(note)
        // writes new file with the data converted into a JSON string and a unique id
        fs.writeFile ("db/db.json", JSON.stringify(notes), (err) => {
            if (err) {
                res.json(err);
            } 
        // function to send a response of the parameter converted to a JSON string
        res.json(note) 
    })
})
});

// deletes data using unique id from db.json, then reads the files and splices the data

router.delete("/notes/:id", (req, res) => {
    fs.readFile ("db/db.json", "UTF-8", (err, data) => {
        if (err) {
            throw err
        }

        // filter data to get notes except the one to delete
        const noMoreID = req.params.id;
        const notes = JSON.parse (data);
        const note = req.body
        // splices unique id from data under the object of noMoreID, and newly created id.
        newNote = notes.splice(noMoreID, 1)
        // calls idTarget function
        idTarget()
        console.log(noMoreID, 0)
        // console.log(note.id, notes, note)

        // Write new data to 'db.json' file
        fs.writeFile ("db/db.json", JSON.stringify(notes), (err) => {
            if (err) {
                res.json(err);
            } 

        // function to send a response of the new parameter converted to a JSON string
        res.json(notes)

    })

    // function idTarget that converts id into whole numbers starting with 0, 1, 2, etc.
    function idTarget() {
        for (i = 0; i < notes.length; i ++) {
            notes[i].id = i;
        }
    }
});
});

module.exports  = router;
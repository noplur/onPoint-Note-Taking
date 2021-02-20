const { v4: uuidv4 } = require('uuid');
const router = require("express").Router();
const fs = require("fs");

// gets the data from db.json and parses the data

router.get("/notes", (req, res) => {
    fs.readFile ("db/db.json", "UTF-8", (err, data) => {
        if (err) {
            throw err
        }
        const notes = JSON.parse (data);
        res.json(notes)
    })
});

// posts data into db.json by adding a unique idea. 

router.post("/notes", (req, res) => {
    fs.readFile ("db/db.json", "UTF-8", (err, data) => {
        if (err) {
            throw err
        }
        const notes = JSON.parse (data);
        const note = req.body
        note.id = uuidv4()
        notes.push(note)
        fs.writeFile ("db/db.json", JSON.stringify(notes), (err) => {
            if (err) {
                res.json(err);
            } 
        res.json(note) 
    })
})
});

// deletes data

// router.delete("/:id", (req, res) => {
//         fs.readFile ("db/db.json", "UTF-8", (err, data) => {
//         if (err) {
//             throw err
//         }

//         const notes = JSON.parse (data);
//         const note = req.body
//         note.id = uuidv4()
//         notes.splice(note.id)

//         fs.writeFile ("db/db.json", JSON.stringify(note.id), (err, data) => {
//             if (err) {
//                 res.json(err);
//             } 
//         res.json(note) 

//     })
// });
// });



module.exports  = router;
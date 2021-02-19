const express = require('express');
// const { db } = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

function filterByQuery(title, dbArray) {
    const result = dbArray.find(db => db.title === title);
    return result;
  }

function getNotes (body) {
    console.log(body);
    return body;
}

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static("public"))

app.use('/api/notes/', apiRoutes);

app.use('/', htmlRoutes);



// app.get('/api/db/:title', (req, res) => {
//     const result = filterByQuery(req.params.title, db);
//     if (result) {
//         res.json(result);
//       } else {
//         res.send(404);
//       }
//     });

// app.get('/api/db', (req, res) => {
//     res.json(db);
//   });

// app.post('/api/db', (req, res) => {
// // req.body is where our incoming content will be
// req.body.title = db.length.toString();


//   res.json(req.body);
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
    });
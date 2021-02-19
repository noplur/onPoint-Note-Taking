// Dependencies

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data

app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// use express route

app.use(express.static("public"))

// use API route

app.use('/api/notes/', apiRoutes);

// use HTML route

app.use('/', htmlRoutes);

// listener

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
    });
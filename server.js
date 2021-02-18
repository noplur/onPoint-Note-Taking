const express = require('express');
const { db } = require('./db/db');

const app = express();

app.get('/api/db', (req, res) => {
    let results = db;
    if (req.query) {
        results = filterByQuery(req.query, results);
      }
      res.json(results);
    });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
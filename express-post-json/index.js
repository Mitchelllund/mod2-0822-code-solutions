const express = require('express');
const app = express();

var nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.status(201);
  nextId++;
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on port 3000'));

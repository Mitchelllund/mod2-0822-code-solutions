const express = require('express');
const app = express();
const fs = require('fs');

const data = require('./data.json');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const resultArr = [];
  for (const prop in data.notes) {
    const resJSON = data.notes[prop];
    resultArr.push(resJSON);
  }
  res.status(200).json(resultArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (Number.isInteger(parseFloat(req.params.id)) && parseFloat(req.params.id) > 0) {
    if (req.params.id in data.notes) {
      res.status(200).json(data.notes[req.params.id]);
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    data.notes[data.nextId] = {
      id: data.nextId,
      content: req.body.content
    };
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(201).json(data.notes[data.nextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (Number.isInteger(parseFloat(req.params.id)) && parseFloat(req.params.id) > 0) {
    if (req.params.id in data.notes) {
      delete data.notes[req.params.id];
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.status(204).json();
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (Number.isInteger(parseFloat(req.params.id)) && parseFloat(req.params.id) > 0 && req.body.content !== undefined) {
    if (req.params.id in data.notes) {
      data.notes[req.params.id] = {
        id: req.params.id,
        content: req.body.content
      };
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'an unexpected error has occured' });
        } else {
          res.status(200).json(data.notes[req.params.id]);
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on port 3000'));

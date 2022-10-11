const data = require('./data.json');
const fs = require('fs');

const operations = process.argv[2];
const id = process.argv[3];
const note = process.argv[4];

fs.readFile('data.json', 'utf8', operation);

function operation() {
  if (operations === 'read') {
    for (const property in data.notes) {
      console.log(`${property}: ${data.notes[property]}`);
    }
  }
  if (operations === 'create') {
    data.notes[data.nextId] = id;
    data.nextId++;
  } else if (operations === 'update') {
    if (data.notes[id] !== undefined) {
      data.notes[id] = note;
    }
  } else if (operations === 'delete') {
    delete data.notes[id];
  }
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

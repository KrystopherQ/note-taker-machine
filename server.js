const PORT = process.env.PORT || 3000;
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const note = require('./db/db.json');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(note.slice(1))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})


function newNote(body, noteArr) {
    const newNotes = body;
    if (!Array.isArray(noteArr))
        noteArr = []
    if (noteArr === 0)
        noteArr.push(0)
    body.id = noteArr[0]
    noteArr[0]++
        noteArr.push(newNotes)
    fs.writeFile(path.join(__dirname, './db/db.json'), json.stringify(noteArr))
    return newNotes;
}

app.post('/api/notes', (req, res) => {
    const newNotes = newNote(req.body, note)
    res.json(newNotes)
})

function byeFelicia(title, noteArr) {
    for (var i = 0; i < noteArr.length; i++) {
        var note = noteArr[i];
        if (note.title === title) {
            noteArr.splice(i, 1)
            fs.writeFileSync(path.join(__dirname, './db/db.json'), json.stringify(noteArr))
        }
    }
}

app.delete('/api/notes/:title', (req, res) => {
    byeFelicia(req.params.id, note)
    res.json(true)
})


app.listen(PORT, () =>
    console.log(`App listening ${PORT} 🚀`)
)
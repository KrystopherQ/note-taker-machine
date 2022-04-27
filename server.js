const PORT = process.envPORT || 3001;
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get()



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
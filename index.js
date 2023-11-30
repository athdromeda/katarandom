const express = require('express')
const { getRandomWords } = require('./utils')
const cors = require('cors');
const path = require('path');
const app = express()
const port = 3000

app.use(cors());
app.listen(port, () => { })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', (req, res) => {
    res.send('API Kata Random')
})

app.get('/api', (req, res) => {
    const randomWords = getRandomWords(5)

    const data = {
        status: 200,
        kata: randomWords
    }

    res.status(200).json(data)
})

app.get('/api/:count', (req, res) => {
    const count = req.params.count;
    const randomWords = getRandomWords(count)

    const data = {
        status: 200,
        kata: randomWords
    }

    res.status(200).json(data)
})

app.use((req, res) => {
    res.status(404).send("404: Page not found");
});
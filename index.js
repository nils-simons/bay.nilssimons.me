const express = require('express');
const { createServer } = require('node:http');
const path = require('path')

const config = require('./config.json');

const app = express();
const server = createServer(app);

app.use('/data', express.static(config.DATA_PATH));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/upload.html'))
});

app.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/data.html'))
});

server.listen(config.SERVER_PORT, () => {
  console.log(`BAY running at *:${config.SERVER_PORT}`);
});
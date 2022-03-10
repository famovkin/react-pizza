const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const router = jsonServer.router('./public/db.json');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));
app.use(router);

app.listen(PORT, () => console.log('Server is running'));
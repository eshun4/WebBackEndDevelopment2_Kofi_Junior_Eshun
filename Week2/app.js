const express = require('express');
const app = express();
const user = require('./user.json');
const port = process.env.PORT || 8080;

app.get('/professional', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var users;
    user.forEach(num=> res.send(num))
});

app.listen(port, ()=>console.log('Listening on Port ' + port) );
const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('helloooooo working');
});

app.listen(3000, function() {
    console.log('listening to port 3000!');
});
const express = require('express');
const bodyParser = require('body-parser');
const getDistanceBetweenAirports = require('./getDistanceBetweenAirports.js');
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('public'));


app.post('/distance', function(req, res) {
    const distance = getDistanceBetweenAirports(req.body.airport1, req.body.airport2);
    res.status(200).json({
        'distance': distance
    })
});


app.listen(3000, function() {
    console.log('listening to port 3000!');
});


module.exports = app;
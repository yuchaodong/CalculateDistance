const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./getDistanceBetweenAirports.js');
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/distance', function(req, res) {
    const { airport1, airport2 } = req.query;

    if (!helpers.assertValidAirportCode(airport1) || !helpers.assertValidAirportCode(airport2)) {
        return res.status(400).send()        
    }
 
    const distance = helpers.getDistanceBetweenAirports(airport1, airport2);
    res.status(200).json({
        'distance': distance
    })
});


app.get('/coordinates', function(req, res) {
    const coordinates = helpers.getAirportCoordinates(req.query.airport);
    res.status(200).json({
        'latitude': coordinates.latitude,
        'longitude': coordinates.longitude
    })
});


app.listen(3000, function() {
    console.log('listening to port 3000!');
});


module.exports = app;
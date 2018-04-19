const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./getDistanceBetweenAirports.js');
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.use(express.static('public'));


app.get('/airport_distance', function(req, res) {
    const { airportCode1, airportCode2 } = req.query;

    if (!helpers.assertValidAirportCode(airportCode1) || !helpers.assertValidAirportCode(airportCode2)) {
        return res.status(400).send()        
    }
 
    const distance = helpers.getDistanceBetweenAirports(airportCode1, airportCode2);
    const responseBody = {
        'distance': distance
    };
    res.status(200).json(responseBody);
});


app.get('/airport_info', function(req, res) {
    const { airportCode } = req.query;
    if (!helpers.assertValidAirportCode(airportCode)) {
        return res.status(400).send()        
    }
    const airportInfo = helpers.getAirportInfo(airportCode);
    res.status(200).json(airportInfo)
});


app.listen(3000, function() {
    console.log('listening to port 3000!');
});


module.exports = app;
const allAirports = require('./allAirports.json');

const airportCoordinates = {};
const airportNames = {};

for (let airport of allAirports) {
  if (airport.country !== 'United States') continue

  airportCoordinates[airport.code] = {
    'latitude': airport.lat,
    'longitude': airport.lon
  };
  airportNames[airport.name] = airport.code;
}

module.exports.names = airportNames;
module.exports.coordinates = airportCoordinates;
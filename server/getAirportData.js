const allAirports = require('./allAirports.json');

const airportCoordinates = {};
const airportNames = {};

for (let airport of allAirports) {
  const airportNameToUpperCase = airport.name.toUpperCase();
  if (airport.country !== 'United States') continue

  airportCoordinates[airport.code] = {
    'latitude': airport.lat,
    'longitude': airport.lon,
    'name': airport.name
  };
  airportNames[airportNameToUpperCase] = airport.code;
}

module.exports.names = airportNames;
module.exports.coordinates = airportCoordinates;
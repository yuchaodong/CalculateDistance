const allAirports = require('./allAirports.json');

const airportInfo = {};
const airportNames = {};

for (let airport of allAirports) {
  const airportNameToUpperCase = airport.name.toUpperCase();
  if (airport.country !== 'United States') continue

  airportInfo[airport.code] = {
    'lat': airport.lat,
    'lon': airport.lon,
    'name': airport.name
  };
  airportNames[airportNameToUpperCase] = airport.code;
}

module.exports = {
  airportNames,
  airportInfo
};
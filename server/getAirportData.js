const allAirports = require('./allAirports.json');

const airportInfo = {};
const airportNames = {};
const airportSelections = {};

for (let airport of allAirports) {
  if (airport.country !== 'United States') continue

  const airportName = airport.name !== '' ? airport.name : 'No airport name';
  const airportNameToUpperCase = airportName.toUpperCase();

  airportInfo[airport.code] = {
    'lat': airport.lat,
    'lon': airport.lon,
    'name': airportName
  };

  airportSelectionInfo = {
    'airportFullName': '(' + airport.code + ') ' + airportName,
    'airportCode': airport.code
  };
  airportSelections[airport.code] = airportSelectionInfo;

  if (airport.name !== '') {
    airportSelections[airportNameToUpperCase] = airportSelectionInfo;
    airportNames[airportNameToUpperCase] = airport.code;
  }
}

module.exports = {
  airportNames,
  airportInfo,
  airportSelections
};
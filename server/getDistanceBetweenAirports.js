const airportData = require('./getAirportData.js');
const airportCoordinates = airportData.coordinates;
const airportNames = airportData.names;
const RADIUS_OF_EARTH = 3440; //In nautical miles


function assertValidAirportCode(input) {
  if (typeof input !== 'string') return false;
  if (airportCoordinates[input]) return true;
  return false;
}


function getDistanceBetweenAirports(airportCode1, airportCode2) {
  const coordinates1 = getAirportCoordinates(airportCode1);
  const coordinates2 = getAirportCoordinates(airportCode2);

  const distance = getDistanceBetweenCoordinates(
    coordinates1.latitude,
    coordinates1.longitude,
    coordinates2.latitude,
    coordinates2.longitude
  );
  return distance;
}


function getAirportCode(input) {
  if (typeof input !== 'string') throw 'Input is not a string';
  
  if (airportCoordinates[input]) {
    return input;
  } else if (airportNames[input]) {
    return airportNames[input];
  }
  throw 'Invalid US Airport Code';
}


function getAirportCoordinates(input) {
  const airportCode = getAirportCode(input);
  const coordinates = airportCoordinates[airportCode];
  return coordinates;
}


function getDistanceBetweenCoordinates(lat1, lon1, lat2, lon2) {
  const latInRadians = convertToRadiansFromDegrees(lat2 - lat1);
  const lonInRadians = convertToRadiansFromDegrees(lon2 - lon1);

  const latSin = Math.sin(latInRadians/2) * Math.sin(latInRadians/2);
  const latCos = Math.cos(convertToRadiansFromDegrees(lat1)) * Math.cos(convertToRadiansFromDegrees(lat2));
  const lonSin = Math.sin(lonInRadians/2) * Math.sin(lonInRadians/2);

  const halfLengthSquared = latSin + latCos * lonSin;
  const angularDistanceInRadians = 2 * Math.atan2(Math.sqrt(halfLengthSquared), Math.sqrt(1 - halfLengthSquared));
  const distanceInNauticalMiles = RADIUS_OF_EARTH * angularDistanceInRadians;
  return Math.round(distanceInNauticalMiles);
}


function convertToRadiansFromDegrees(degrees) {
    return degrees * (Math.PI / 180);
}


module.exports = {
  assertValidAirportCode,
  getDistanceBetweenAirports,
  getAirportCoordinates
}
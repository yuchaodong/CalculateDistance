const { airportInfo, airportNames } = require('./getAirportData.js');
const RADIUS_OF_EARTH = 3440; //In nautical miles


function assertValidAirportCode(input) {
  if (typeof input !== 'string') return false;
  if (airportInfo[input]) return true;
  return false;
}


function getDistanceBetweenAirports(airportCode1, airportCode2) {
  const coordinates1 = getAirportInfo(airportCode1);
  const coordinates2 = getAirportInfo(airportCode2);

  const distance = getDistanceBetweenCoordinates(
    coordinates1.lat,
    coordinates1.lon,
    coordinates2.lat,
    coordinates2.lon
  );
  return distance + ' Nautical Miles Between ' + airportCode1 + ' and ' + airportCode2;
}


function getAirportCode(input) {
  if (typeof input !== 'string' || input === '') throw 'Input is not a string';
  
  if (airportInfo[input]) {
    return input;
  } else if (airportNames[input]) {
    return airportNames[input];
  }
  throw 'Invalid US Airport Code';
}


function getAirportInfo(input) {
  const airportCode = getAirportCode(input);
  const coordinates = airportInfo[airportCode];
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
  getAirportInfo
}
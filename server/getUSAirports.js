// require data and use imported file as input
let allAirports = require('./allAirports.json');


const getUSAirports = (array) => {
    let USAirports = [];
    // iterate through imported array (data);
    for (let i = 0; i < allAirports.length; i++) {
        // to filter through airport location, 
        // push airports where country = US to array with US-only airports
        if (allAirports[i].country === 'United States') {
            USAirports.push(allAirports[i]);
        }
    }
    // return US-only array
    console.log(USAirports);
}


getUSAirports();

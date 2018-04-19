const URL_AIRPORT_INFO = '/airport_info';
const URL_AIRPORT_DISTANCE = '/airport_distance';


function showAirportDistanceInfo() {
    const display = document.getElementById('displayDistance');
    const airportCode1 = document.getElementById('airport1').value;
    const airportCode2 = document.getElementById('airport2').value;
    
    showAirportDistance(display, airportCode1, airportCode2);
    showRouteMap(airportCode1, airportCode2);
}


function showAirportDistance(display, airportCode1, airportCode2) {
    const distanceParams = {
        params: {
            'airportCode1': airportCode1,
            'airportCode2': airportCode2
        }
    }
    axios.get(URL_AIRPORT_DISTANCE, distanceParams)
        .then((response) => {
            display.innerHTML = response.data.distance;
        })
        .catch((error) => {
            display.innerHTML = error.response.statusText;
        });
}


function showRouteMap(airportCode1, airportCode2) {    
    Promise.all([getAirportInfo(airportCode1), getAirportInfo(airportCode2)])
    .then((points) => {
        createRouteMap(points);
    })
    .catch((error) => {
        console.log('lol error. probs need to show something', error)
    })
}


function getAirportInfo(airportCode) {
    const requestParams = {
        params: {
            'airportCode': airportCode
        }
    };

    return axios.get(URL_AIRPORT_INFO, requestParams)
        .then((response) => {
            return response.data;
        });
}


const getDistance = document.getElementById('calculateDistanceButton');
getDistance.addEventListener('click', showAirportDistanceInfo);
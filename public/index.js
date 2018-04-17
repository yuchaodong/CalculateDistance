
function getAirportInfo(code) {
    // TODO use axios 'get /coordinates' via code
    return {
        lat: 40,
        lon: -73,
        name: 'first one'
    }
}
function getCoordinates() {
    const getLatAndLon1 = document.getElementById('airport1').value;
    const getLatAndLon2 = document.getElementById('airport2').value;

    const url = '/coordinates';
    const coordinatesParams = {
        params: {

        }
    }
}


function getAirports() {
    const point1 = getAirportInfo('JFK')
    const point2 = {
        lat: 32,
        lon: -99,
        name: 'second one'
    }
    createRouteMap(point1, point2);
}



function getAirports2() {
    const display = document.getElementById('displayDistance');
    const airport1 = document.getElementById('airport1').value;
    const airport2 = document.getElementById('airport2').value;
    
    const url = '/distance';
    const distanceParams = {
        params: {
            'airport1': airport1,
            'airport2': airport2
        }
    }
    axios.get(url, distanceParams)
        .then((response) => {
            display.innerHTML = response.data.distance;
        })
        .catch((error) => {
            display.innerHTML = error.response.statusText;
        });
}


const getDistance = document.getElementById('calculateDistanceButton');
getDistance.addEventListener('click', getAirports);

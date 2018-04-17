function getAirports() {
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

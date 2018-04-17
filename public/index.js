function getAirports() {
    const airport1 = document.getElementById('airport1').value.toUpperCase();
    const airport2 = document.getElementById('airport2').value.toUpperCase();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        const display = document.getElementById('displayDistance');
        if ((!airport1 && !airport2) || !airport1 || !airport2) {
            display.innerHTML = 'Please fill out both origin and destination airports.';
        } else if (this.readyState === 4 && this.status === 200) {
            display.innerHTML = xhttp.responseText;
        } else if (this.status === 500) {
            display.innerHTML = 'Your inputs are invalid, please double-check your inputs.';
        } else {
            display.innerHTML = `Uncertain error: ${this.status}`;         
        }
    };
    var url = '/distance';
    xhttp.open('GET', url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({
        'airport1': airport1,
        'airport2': airport2
    }));
}


const getDistance = document.getElementById('calculateDistanceButton');
getDistance.addEventListener('click', getAirports);

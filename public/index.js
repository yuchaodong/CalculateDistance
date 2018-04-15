function getAirports() {
    const airport1 = document.getElementById('airport1').value;
    const airport2 = document.getElementById('airport2').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        const display = document.getElementById('displayDistance')
        if (this.readyState === 4 && this.status === 200) {
           display.innerHTML = xhttp.responseText;
        } else if (this.status === 500) {
            display.innerHTML = 'Your inputs are invalid';
        } else {
            display.innerHTML = `Uncertain error: ${this.status}`;         
        }
    };
    var url = '/distance'
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify({
        'airport1': airport1,
        'airport2': airport2
    }));
}


const getAirportCode = document.getElementById('submit');
getAirportCode.addEventListener('click', getAirports);

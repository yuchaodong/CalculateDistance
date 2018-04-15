function getAirports() {
    const airport1 = document.getElementById('airport1').value;
    const airport2 = document.getElementById('airport2').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('displayDistance').innerHTML = xhttp.responseText;
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

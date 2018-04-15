function getFromAirport() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("displayDistance").innerHTML = xhttp.responseText;
      }
    };
    var url = '/distance'
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify({
        'airport1': 'ABE',
        'airport2': 'ABI'
    }));
}


const getAirportCode = document.getElementById('submit');
getAirportCode.addEventListener("click", getFromAirport);

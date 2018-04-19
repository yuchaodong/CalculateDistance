//practice

// function getAirports1() {
//     const airport1 = document.getElementById('airport1').value.toUpperCase();
//     const airport2 = document.getElementById('airport2').value.toUpperCase();
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         const display = document.getElementById('displayDistance');
//         if ((!airport1 && !airport2) || !airport1 || !airport2) {
//             display.innerHTML = 'Please fill out both origin and destination airports.';
//         } else if (this.readyState === 4 && this.status === 200) {
//             display.innerHTML = xhttp.responseText;
//         } else if (this.status === 500) {
//             display.innerHTML = 'Your inputs are invalid, please double-check your inputs.';
//         } else {
//             display.innerHTML = `Uncertain error: ${this.status}`;         
//         }
//     };
//     const url = '/distance?airport1=JFK&airport2=ABI';
//     xhttp.open('GET', url, true);
//     xhttp.send();
// }

// function getAirports2() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         const display = document.getElementById('displayDistance');        
//         if (this.readyState === 4 && this.status === 200) {
//             display.innerHTML = xhttp.responseText;
//         }
//     }        
//     const url = 'https://httpbin.org/ip';
//     xhttp.open('GET', url, true);
//     xhttp.send();
// }

// function getAirports3() {
//     console.log(456)
//     const url = 'https://httpbin.org/ip';
//     axios.get(url)
//         .then(function (response) {
//             const display = document.getElementById('displayDistance')
//             display.innerHTML = response.data.origin
//         })
//         .catch(function (error) {
//             console.log(5, error);
//         });
// }

// function getAirports() {
//     console.log(789)
//     const display = document.getElementById('displayDistance');
//     const airport1 = document.getElementById('airport1').value;
//     const airport2 = document.getElementById('airport2').value;
    
//     const url = '/distance';
//     //const url = '/distance?airport1=ABE&airport2=ABI';
    
//     const distanceParams = {
//         params: {
//             'airport1': airport1,
//             'airport2': airport2
//         }
//     }
//     axios.get(url, distanceParams)
//         .then((response) => {
//             console.log('r', response)
//             display.innerHTML = response.data.distance;
//         })
//         .catch((error) => {
//             display.innerHTML = error.response.statusText;

//         });
// }

// const getDistance = document.getElementById('calculateDistanceButton');
// getDistance.addEventListener('click', getAirports);

//-------------------------------------------------------------------------------//

//temp

// const infowindow = new google.maps.InfoWindow(); 

// for (let i = 0; i < coordinates.length; i++) {
//     var myLatLng = {lat: -25.363, lng: 131.044};
    
//     const marker = new google.maps.Marker({
//         position: new google.maps.LatLng(coordinates[i][1], coordinates[i][2]),
//         map: map
//     });

// bounds.extend(marker.position);

// google.maps.event.addListener(marker, 'click', (function (marker, i) {
//     return function() {
//         infowindow.setContent(coordinates[i][0]);
//         infowindow.open(map, marker);
//     }
//     })(marker, i));
// }

// map.fitBounds(bounds);    


// const listener = google.maps.event.addListener(map, "idle", function () {
//     map.setZoom(3);
//     google.maps.event.removeListener(listener);
// });


// function getCoordinates() {
//     // TODO: replace w axios

//     const getLatAndLon1 = document.getElementById('airport1').value;
//     const getLatAndLon2 = document.getElementById('airport2').value;
// }

// function initMap() {
//     const bounds = new google.maps.LatLngBounds();
//     const infowindow = new google.maps.InfoWindow();

//     const coordinates = [
//         ['origin', 37.772, -122.214],
//         ['destination', -27.467, 153.027]
//     ];
//     const flightPathCoordinates = [
//         {lat: coordinates[0][1], lon: coordinates[0][1]},
//         {lat: coordinates[1][1], lon: coordinates[1][1]},        
//     ]
        
//     const map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 3,
//       center: new google.maps.LatLng(coordinates[0][1], coordinates[0][2]),
//       mapTypeId: 'terrain'
//     });    

//     const flightPath = new google.maps.Polyline({
//         path: flightPathCoordinates,
//         geodesic: true,
//         strokeColor: '#FF0000',
//         strokeOpacity: 1.0,
//         strokeWeight: 2
//     });

//     flightPath.setMap(map);
    
//     for (let i = 0; i < coordinates.length; i++) {
//         var myLatLng = {lat: -25.363, lng: 131.044};
        
//         const marker = new google.maps.Marker({
//             position: new google.maps.LatLng(coordinates[i][1], coordinates[i][2]),
//             map: map
//         });

//     bounds.extend(marker.position);

//     google.maps.event.addListener(marker, 'click', (function (marker, i) {
//         return function() {
//             infowindow.setContent(coordinates[i][0]);
//             infowindow.open(map, marker);
//         }
//         })(marker, i));
//     }

//     map.fitBounds(bounds);    


//     const listener = google.maps.event.addListener(map, "idle", function () {
//         map.setZoom(3);
//         google.maps.event.removeListener(listener);
//     });

// }



// function getCoordinates() {
//     const getLatAndLon1 = document.getElementById('airport1').value.toUpperCase();
//     const getLatAndLon2 = document.getElementById('airport2').value.toUpperCase();
//     console.log('lat', getLatAndLon1)
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         // console.log('onreadystatechange');
//     };
//     var url = '/coordinates';
//     xhttp.open('POST', url, true);
//     xhttp.setRequestHeader('Content-Type', 'application/json');
//     xhttp.send(JSON.stringify({
//         // 'lat1': getLatAndLon1,
//         // 'lat1': getLatAndLon1.lat,
//         // 'lon1': getLatAndLon1.lon,
//         // 'lat2': getLatAndLon2.lat,
//         // 'lon2': getLatAndLon2.lon
//     }));
//     // console.log('here', )
//     // var xhttp = new XMLHttpRequest();
 
//     // var url = '/distance';
//     // xhttp.open('POST', url, true);
//     // xhttp.setRequestHeader('Content-Type', 'application/json');
//     // xhttp.send(JSON.stringify({
//         // 'lat1': lat1,
//     //     'lat1': airport1.lat,
//     //     'lon1': airport1.lon,
//     //     'lat2': airport2.lat,
//     //     'lon2': airport2.lon
//     // }));

//     // const airportCoordinates = [
//     //     {lat:}
        
//     // ]
// }
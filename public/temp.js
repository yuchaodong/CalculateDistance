

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


function getCoordinates() {
    // TODO: replace w axios

    const getLatAndLon1 = document.getElementById('airport1').value;
    const getLatAndLon2 = document.getElementById('airport2').value;
}
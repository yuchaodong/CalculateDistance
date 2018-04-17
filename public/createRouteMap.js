function createRouteMap(point1, point2) {
    const infowindow = new google.maps.InfoWindow();
    const map = createMap();
    const flightPath = createFlightPath(point1.lat, point1.lon, point2.lat, point2.lon);
    flightPath.setMap(map);
    centerMapToPolyline(map, flightPath);
    createMarker(map, infowindow, point1.lat, point1.lon, point1.name);
    createMarker(map, infowindow, point2.lat, point2.lon, point2.name);
}


function createMarker(map, infowindow, lat, lon, name) {
    const marker = new google.maps.Marker({
        position: {'lat': lat, 'lng': lon},
        map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(name);
        infowindow.open(map, marker)
    });
}


function createMap() {
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
        zoom: 3,
        center: {lat: 37.0902, lng: 95.7129},
        mapTypeId: 'terrain'
    });
    return map;
}


function createFlightPath(lat1, lon1, lat2, lon2) {
    const flightPathCoordinates = [
        {lat: lat1, lng: lon1},
        {lat: lat2, lng: lon2}        
    ];

    const flightPath = new google.maps.Polyline({
        path: flightPathCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    return flightPath;
}


function centerMapToPolyline(map, polyline){
    var bounds = new google.maps.LatLngBounds();
    var points = polyline.getPath().getArray();
    for (let point of points){
        bounds.extend(point);
    }
    map.fitBounds(bounds);
}


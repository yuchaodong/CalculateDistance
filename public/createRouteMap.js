function createRouteMap() {
    const lat1 = 37.772
    const lon1 = -122.214
    const lat2 = -27.467
    const lon2 = 153.027

    const map = createMap();
    const flightPath = createFlightPath(lat1, lon1, lat2, lon2);
    flightPath.setMap(map);
    centerMapToPolyline(map, flightPath);
}


function createMap() {
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
        zoom: 3,
        center: {lat: 40, lng: -70},
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
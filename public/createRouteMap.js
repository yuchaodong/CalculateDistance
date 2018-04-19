function createRouteMap(data) {
    if (!Array.isArray(data)) throw 'ERROR: Not an array!';

    const points = convertDataToPoints(data);

    const infowindow = new google.maps.InfoWindow();
    const map = createMap();
    const flightPath = createFlightPath(points);
    flightPath.setMap(map);
    centerMapToPolyline(map, flightPath);

    for (let point of points) {
        createMarker(map, infowindow, point)
    }
}

function convertDataToPoints(data) {
    const points = data.map((point) => {
        return {
           lat: parseFloat(point.lat),
           lng: parseFloat(point.lon),
           name: point.name
       };
   });
   return points;
}

function createMarker(map, infowindow, point) {
    const marker = new google.maps.Marker({
        position: {'lat': point.lat, 'lng': point.lng},
        map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(point.name);
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


function createFlightPath(points) {
    const flightPath = new google.maps.Polyline({
        path: points,
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


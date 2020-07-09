mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ';
var mapboxClient = mapboxSdk({
    accessToken: mapboxgl.accessToken
});
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [13.399557, 52.510008],
    zoom: 11.1
});

function addPin(options) {
    return new mapboxgl.Marker(options).setLngLat(options.coord).addTo(map);
}

function getCenter() {
    return map.getCenter();
}

if(typeof markerList != "undefined"){
    markerList.forEach( marker => {map
        if (marker.lngLat) {
            addPin({
                coord: marker.coord
            });
        } else {
            mapboxClient.geocoding
            .forwardGeocode({
                query: `${marker.address}`,
                autocomplete: false,
                limit: 1
            })
            .send()
            .then(function (response) {
                if (
                    response &&
                    response.body &&
                    response.body.features &&
                    response.body.features.length
                ) {
                    var feature = response.body.features[0];
                    addPin({
                        coord: feature.center
                    });
                    new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
                    //map.setCenter(feature.center)
                }
            });
        }
    });
}

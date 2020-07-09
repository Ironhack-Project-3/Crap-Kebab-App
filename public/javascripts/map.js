// mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ';
// const map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/racheldlt/ckc7nnvnc1ax01ioofuneje0f', // stylesheet location
// center: [13.399557, 52.510008], // starting position [lng, lat]
// zoom: 11.1 // starting zoom
// });



//-----------------------Fetch imbiss from API


//load map
// function loadMap(Imbisses){
//     map.on('load', function() {
//             map.addLayer({
//                 id: 'points',
//                 type: 'symbol',
//                 source: {
//                     type: 'geojson',
//                     data: {
//                         type: 'FeatureCollection',
//                         features: Imbisses
// features: [
//     {
//         type: 'Feature',
//         geometry: {
//             type: 'Point',
//             coordinates: [13.399557, 52.510008]
//         },
//         properties: {
//             Name: 'string'
//         }
//     }
// ]
//                     }
//                 },
//                 // layout:{
//                 //     'icon-image': 'xxx',
//                 //     'icon-size': 1,5,
//                 //     'text-field': '{storeId}',
//                 //     'text-offset': [0, 0.9]
//                 // }
//             });
//         });
// }

// loadMap();



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

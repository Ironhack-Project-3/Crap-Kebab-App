mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/racheldlt/ckc7nnvnc1ax01ioofuneje0f', // stylesheet location
center: [13.399557, 52.510008], // starting position [lng, lat]
zoom: 11.1 // starting zoom
});
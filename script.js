mapboxgl.accessToken = 'pk.eyJ1IjoiZmx5ZnJlZWpheSIsImEiOiJjbHI3emdhZzUyamtqMmpteXNtaGJxbGVyIn0.SrkrFYfxjCieaBwWWdMb-w';
const map = new mapboxgl.Map({
	container: 'my-map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 9, // starting zoom
});
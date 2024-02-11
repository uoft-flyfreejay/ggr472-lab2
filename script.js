mapboxgl.accessToken = 'pk.eyJ1IjoiZmx5ZnJlZWpheSIsImEiOiJjbHI3emdhZzUyamtqMmpteXNtaGJxbGVyIn0.SrkrFYfxjCieaBwWWdMb-w';
const map = new mapboxgl.Map({
	container: 'my-map', // container ID
	style: 'mapbox://styles/flyfreejay/clsgtk42u03h301pfdtt0g4ke', // style URL
	//I want the starting position to be Toronto, so I changed the center 
	center: [-79.3832, 43.6532], // starting position [lng, lat]
	zoom: 9, // starting zoom
});

map.on('load', () => {
	 // Load an image from an external URL.
	 map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/cat.png', function(error, image) {
        if (error) throw error;
        
        // Add the loaded image to the map's style with an ID.
        map.addImage('cat-icon', image);
        
        // Add a GeoJSON source containing the points data.
        map.addSource('culture-hotspots-src', {
            'type': 'geojson',
            'data': 'https://raw.githubusercontent.com/uoft-flyfreejay/ggr472-lab2/main/points-of-interest.geojson'
        });
        
        // Add a layer to use the image to represent the points.
        map.addLayer({
            'id': 'culture-hotspots-layer',
            'type': 'symbol', // Changed from 'circle' to 'symbol'
            'source': 'culture-hotspots-src',
            'layout': {
                // Use the image with 'cat-icon' ID as the icon for each point.
                'icon-image': 'cat-icon',
                // Optional: Adjust the icon size.
                'icon-size': 0.25
            }
        });
    });

	
	// Add a source for the census tracks data.
    map.addSource('census-tracks-src', {
        'type': 'vector',
        'url': 'mapbox://flyfreejay.1xkbmmjd'
    });
    // Add a layer to render the census tracks.
    map.addLayer({
        'id': 'census-tracks-layer',
        'type': 'fill',
        'source': 'census-tracks-src',
        'paint': {
            'fill-color': '#888888', // Sets the fill color to a grey shade.
            'fill-opacity': 0.5, // Sets the fill opacity to 50%.
            'fill-outline-color': '#000000' // Sets the outline color to black.
        },
        'source-layer': 'torontoct-2oll7h' // References the specific layer in the vector source to render.
    });
});

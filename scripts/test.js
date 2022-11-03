function Draw () {
	fetch('./ukgeojson/ukgeojson.json')
		.then((response) => response.json())
		.then((json) => console.log(json));
	let rectangular_projection = d3.geoEquirectangular();
	let Generator = d3.geoPath().projection(rectangular_projection);
	geoJson=JSON.parse(data);
	alert(geoJson.type);
	Generator(geoJson);
}
window.onload=Draw;
var nytKey = "24408d8ab4874669867d655efa0b79b8"
var geoKey = "AIzaSyBfuFWdsliEEnnpj8s5x5wWnNisXAVtSNQ"
var baseSVUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="
var baseGeoUrl = "https://maps.googleapis.com/maps/api/geocode/json?key="+ geoKey + "&address="


function getGeocode(location){
	$.getJSON(baseGeoUrl + location, function(data){
		console.log(data.results);
	})
}


function getLocation() {
	var $header = $('header');
	var $h1 = $('h1');
	var $location = $('#location');
	var value = $location.val()
	var locationURL = value.replace(/ /g, "%20");
	var imgUrl = "url(" + baseSVUrl + locationURL + ")";

	$header.css({'background-image': imgUrl,
				 'background-size': 'cover'});
	$h1.text(value);

	getGeocode(locationURL);
}
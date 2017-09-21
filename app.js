var nytKey = "24408d8ab4874669867d655efa0b79b8"

var baseSVUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="
var nytBaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

var nytFl = "headline,web_url,snippet"


function getWikiLinks(location) {
	$.ajax({
		url: 'http//en.wikipedia.org/w/api.php',
		data: {
			action: 'query',
			list: 'search',
			srsearch: location,
			format: 'json'
		},
		dataType: 'jsonp',
		jsonp: true,
		success: function(data) {
			console.log(data);
		}
	});

}


function getArticles(location) {
	var $articles = $('#articles');
	$articles.text("");
	var url = nytBaseUrl + "?api-key=" + nytKey + "&fl=" + nytFl + "&q=" + location;
	$.getJSON(url, function(data) {
		var articleList = data.response.docs
		for (i=0; i<articleList.length; i++) {
			$articles.append("<h3><a href=" + articleList[i]['web_url'] + ">" +
			  articleList[i]['headline']['main'] + "</a></h3>");
			$articles.append("<p>" + articleList[i]['snippet'] + "</p>");
		}

		if (articleList.length == 0) {
			$articles.append("No relevent articles for this location. Try something less specific.");
		}
	}).fail(function() {
		$articles.append("Couldn't find any articles here.");
	})
}


function getLocation() {
	var $header = $('header');
	var $h1 = $('h1');
	var $location = $('#location');
	var value = $location.val()
	var locationURL = value.replace(/ /g, "%20");
	var imgUrl = "url(" + baseSVUrl + locationURL + ")";

	$location.val("")
	$header.css({'background-image': imgUrl,
				 'background-size': 'cover'});
	$h1.text(value);

	getArticles(locationURL);
	getWikiLinks(value);
}
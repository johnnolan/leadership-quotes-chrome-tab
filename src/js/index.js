fetch('/data/quotes.json', {
	method: 'get'
}).then(function(response) {
	return response.json();
}).then(function(jsonPackage) {
	var randomNumber = Math.floor((Math.random() * jsonPackage.length));
	var quoteItem = jsonPackage[randomNumber];
	document.getElementById('quote').innerHTML = '"' + quoteItem.quote + '"<div class="author">- ' + quoteItem.author + '</div>';
});


function buildPopupDom(mostVisitedURLs) {
	var popupDiv = document.getElementById('most-visited');
	var ol = popupDiv.appendChild(document.createElement('ol'));
console.log(mostVisitedURLs);
	for (var i = 0; i < 10; i++) {
		var li = ol.appendChild(document.createElement('li'));
		var a = li.appendChild(document.createElement('a'));
		a.href = mostVisitedURLs[i].url;
		a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
	}
}

chrome.topSites.get(buildPopupDom);
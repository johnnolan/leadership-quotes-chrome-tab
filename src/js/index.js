fetch('/data/quotes.json', {
	method: 'get'
}).then(function(response) {
	return response.json();
}).then(function(jsonPackage) {
	var randomNumber = Math.floor((Math.random() * jsonPackage.length));
	var quoteItem = jsonPackage[randomNumber];
	document.getElementById('quote').innerHTML = '"' + quoteItem.quote + '"<div class="author">- ' + quoteItem.author + '</div>';
});
//////////////////require express//
var express = require('express');
//////////////// require request//
var	request = require('request');

var app = express();

////////////conect server with the client side//////

app.use(express.static('./client'));

////////////////*route config/////////////////////

app.get('/api/offers',function (req, res){
	request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function (error, response, body){
		var allData = JSON.parse(body);
		for (var i = 0; i < allData.length; i++) {
		};
		res.json(allData.offers.Hotel)
	})
});


////////////////run the server///////////////////////

var port = 8080;
app.listen(process.env.PORT || port);
console.log('Server now listening on port' + port);


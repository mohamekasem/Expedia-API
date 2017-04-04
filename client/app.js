var app = angular.module('Expedia',[
	'Expedia.offer',
	'Expedia.serv',
	'ngRoute'
	]);

app.config(function ($routeProvider, $httpProvider) {
$routeProvider
	.when('/',{
		templateUrl:'offers/offers.html',
		controller:'offersCtrl'
	})
});
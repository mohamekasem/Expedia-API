angular.module('Expedia.offer', [])

.controller('offersCtrl',function ($scope, serv) {
  $scope.offer=[];
  $scope.moreD=[];
  var temp;
  $scope.getOffers = function (){
    serv.GEToffers().then(function (data){
		for(var i = 0;i<data.length;i++){
			data[i].hotelUrls.hotelInfositeUrl = decodeURIComponent(data[i].hotelUrls.hotelInfositeUrl)
		}
		$scope.offer = data
		console.log(data[0])

})
	}
})

// });// console.log(data)// $scope.offer.push(data[i].hotelInfo)
// $scope.moreD.push(temp)
// $scope.moreD.Price = data[i].hotelPricingInfo	
// 	
// 	app.filter('decodeURIComponent', function() {
// return window.decodeURIComponent;
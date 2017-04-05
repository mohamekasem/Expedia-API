angular.module('Expedia.offer', [])

.controller('offersCtrl',function ($scope, serv) {
  $scope.offer=[];
  $scope.moreD=[];
  var temp;
  $scope.getOffers = function (){
    serv.GEToffers().then(function (data){
		for(var i = 0;i<data.length;i++){
			data[i].hotelUrls.hotelInfositeUrl = decodeURIComponent(data[i].hotelUrls.hotelInfositeUrl);
		}
		 $scope.offer = data;
		})
	}
});

angular.module('Expedia.serv',[])

.factory('serv',function ($http) {
	
	return{
		GEToffers:function(){
			return $http({
				method:'GET',
				url:'api/offers'
			}).then(function (res) {
				return res.data;
			})
		}
	}
})


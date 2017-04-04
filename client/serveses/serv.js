angular.module('Expedia.serv',[])

.factory('serv',function ($http) {
	
	return{
		GEToffers:function(){
			console.log('haha')
			return $http({
				method:'GET',
				url:'api/offers'
			}).then(function (res) {
				console.log(res.data)
				return res.data;
			})

		}
	}
})


var app = angular.module('spotifyApp', []);
var baseUrl = "https://api.spotify.com/v1/search";

app.controller('mainCtrl', function($scope, $http){
	//Make a request to spotify with given query parameter and type
	$scope.getData = function(query, type){
		$http.get(baseUrl + "?query=" + query.replace(" ", "+") + "&type=" + type)
		.success(function(response){
			$scope.data = response;
		})
		.error(function(){
			alert('There has been an error processing your request');
		});
	}
});
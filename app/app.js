var app = angular.module('Portfolio',["ngRoute"]);

app.config(['$routeProvider',
		function($routeProvider){
		$routeProvider.when('/',{
			// controller: 'homeController',
			templateUrl: 'app/components/home/homeView.html',
			controller: 'RouteController'
		  }).
		when('/route',{
			templateUrl: 'app/components/home/designView.html',
			
		}).
		otherwise({
			redirectTo: '/'
		});
}]);


app.controller("RouteController", function($scope) {

 });
var app = angular.module('Portfolio',["ngRoute"]);

app.config(['$routeProvider',
		function($routeProvider){
		$routeProvider.when('/',{
			// controller: 'homeController',
			templateUrl: 'app/components/home/homeView.html',
			controller: 'RouteController'
		  }).
		when('/design',{
			templateUrl: 'app/components/design/designView.html',
			// controller: 'RouteController'
		}).
		otherwise({
			// redirectTo: '/',
			templateUrl: 'app/components/design/homeView.html'
		});
}]);


app.controller("RouteController", function($scope) {

});
app.Controller('homeController',['$scope',function($scope, $location)
{
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};
}]);	
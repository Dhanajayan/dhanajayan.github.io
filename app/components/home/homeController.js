app.Controller('headerController',['$scope',function($scope, $location)
{
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};
}]);	
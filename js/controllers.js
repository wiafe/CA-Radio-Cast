var hostController = angular.module('hostController', ['ngAnimate']);

hostController.controller('ListController', ['$scope', '$http', function($scope, $http){
	
	$http.get('js/data.json').success(function(data) {
		$scope.host = data;
		$scope.hostOrder = 'name';
	});
}]);

hostController.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	
	$http.get('js/data.json').success(function(data) {
		$scope.host = data;
		$scope.whichItem = $routeParams.itemId;

		if ($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.host.length-1;
		}

		if ($routeParams.itemId < $scope.host.length-1) {
			$scope.nextItem = Number($routeParams.itemId)+1;
		} else {
			$scope.nextItem = 0;
		}		
	});
}]);

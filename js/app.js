var app = angular.module('CirklarnaApp', []);

app.controller('HomeController', ['$scope', function($scope) {

	$scope.content = {};
	$scope.content.contentUrl = 'html/my-home';

}]);

app.directive('homePage', function() {
	return {
		restrict: 'E',
		templateUrl: '/html/home-page.html'
	};
});

app.controller('PropsController', ['$scope', '$http', '$q', 'propsService', function($scope, $http, $q, propsService) {
	$scope.loadProps = function() {
		propsService.loadProps().
		then(function(propsData) {
			$scope.propsData = propsData;
		});
	};
}]);

app.directive('propPage', function() {
	return {
		restrict: 'E',
		templateUrl: '/html/prop-page.html',
		controllerAs: 'pc',
		controller: 'PropsController'
	};
});

app.factory('propsService', ['$scope', '$http', '$q', function($scope, $http, $q) {
	return {
		loadProps: function() {
			var deferred = $q.defer();
			$http.get('/json/props.json')
				.success(function(data){
					deferred.resolve({
						propName: data.propName,
						description: data.description,
						performers: data.performers});
				}).error(function(msg, code) {
					deferred.reject(msg);
					$log.error(msg, code);
					});
				return deferred.promise;
		}
	};
}]);



var app = angular.module('CirklarnaApp', []);

app.controller('HomeController', ['$scope', function(scope) {

}]);

app.directive('myHome', function() {
	
	return {
		restrict: 'E',
		templateUrl: 'my-home.html'
	};

});

app.directive('myProps', function() {

	return {
		restrict: 'E',
		templateUrl: 'my-props.html'
	};

});

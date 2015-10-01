var app = angular.module('CirklarnaApp', []);

app.controller('HomeController', ['$scope', function($scope) {

	$scope.content = {};
	$scope.content.contentUrl = 'html/my-home';

}]);



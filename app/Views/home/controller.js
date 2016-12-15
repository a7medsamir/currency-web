'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Views/home/index.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope) {
$scope.message1="hello world";
});
'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'views/about/index.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', function($scope) {
});
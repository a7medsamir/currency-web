'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.about',
  'myApp.currency',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
//go to defaul tab
  $routeProvider.otherwise({redirectTo: '/currency'});
}]).run(['$rootScope', '$location', function($rootScope, $location){
   var path = function() { return $location.path();};
   $rootScope.$watch(path, function(newVal, oldVal){
     $rootScope.activetab = newVal;
   });
}]);

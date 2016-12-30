
'use strict';

// Declare app level module which depends on views, and components
angular
  .module('App', [
    'ngRoute',
    'App.home',
    'App.about',
    'App.currency',
    'App.version'
  ])
  .config(initRouter);

function initRouter(
  $locationProvider: angular.ILocationProvider,
  $routeProvider: ng.route.IRouteProvider): void {

  $locationProvider.hashPrefix('!');
  // go to defaul tab
  $routeProvider.otherwise({ redirectTo: '/currency' });

  $routeProvider.when('/home', {
    templateUrl: 'Views/home/index.html',
    controller: 'HomeController'
  });
  
  $routeProvider.when('/about', {
    templateUrl: 'views/about/index.html',
    controller: 'AboutController'
  });

  $routeProvider.when('/currency', {
    templateUrl: 'views/currency/index.html',
    controller: 'currencyCtrl'
  });
};

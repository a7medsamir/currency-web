  'use strict';

/**
 * Home view controller
 */
class HomeController {
  public scope: angular.IScope;

  constructor ($scope: angular.IScope){
    this.scope = $scope;
  }

}
  angular
    .module('App.home', ['ngRoute'])
    .controller('HomeController', HomeController);

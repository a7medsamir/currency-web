
  'use strict';
/**
 * About view controller
 */
class AboutController{
  public scope: angular.IScope;

  constructor ($scope: angular.IScope){
    this.scope = $scope;
  }
}

  angular.module('App.about',[])
    .controller('AboutController', AboutController);

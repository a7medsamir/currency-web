'use strict';
/**
 * Home view controller
 */
var HomeController = (function () {
    function HomeController($scope) {
        this.scope = $scope;
    }
    return HomeController;
}());
angular
    .module('App.home', ['ngRoute'])
    .controller('HomeController', HomeController);
//# sourceMappingURL=controller.js.map
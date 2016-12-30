'use strict';
/**
 * About view controller
 */
var AboutController = (function () {
    function AboutController($scope) {
        this.scope = $scope;
    }
    return AboutController;
}());
angular.module('App.about', [])
    .controller('AboutController', AboutController);
//# sourceMappingURL=controller.js.map
'use strict';
var CurrencyController = (function () {
    function CurrencyController($scope, $http, CurrencyService) {
        this.CurrentCurrencyCode = "USD";
        this.CurreciesCodes = ["USD", "EUR", "SAR", "AED"];
        this.list = [];
        this.scope = $scope;
        this.scope["vm"] = this;
        this.currencyService = CurrencyService;
        //load by default current selected currency
        this.Refresh(this.CurrentCurrencyCode);
    }
    CurrencyController.prototype.Fetch = function (currencyCode) {
        var _this = this;
        this.currencyService.FetchCurrency(currencyCode, function (result) {
            _this.list = result;
        }, function (error) {
            console.log("function fetch called with error " + new Date().getTime());
        });
    };
    CurrencyController.prototype.Refresh = function (currencyCode) {
        console.log("function Refresh called" + new Date().getTime());
        this.CurrentCurrencyCode = currencyCode;
        this.Fetch(this.CurrentCurrencyCode);
    };
    return CurrencyController;
}());
CurrencyController.$inject = ['$scope', 'http', 'CurrencyService'];
angular.module('App.currency', [
    'App.currency.services',
    'App.currency.directives'
])
    .controller('currencyCtrl', ['$scope', '$http', 'currencyService', CurrencyController]);
//# sourceMappingURL=controller.js.map
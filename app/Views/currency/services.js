'use strict';
var CurrencyService = (function () {
    function CurrencyService($http) {
        this.Url = "http://localhost:8000/api/currencies/";
        this.http = $http;
    }
    CurrencyService.prototype.FetchCurrency = function (CuurencyCode, onSuccess, onError) {
        this.http.jsonp(this.Url + CuurencyCode + '?callback=JSON_CALLBACK').success(onSuccess).error(onError);
    };
    return CurrencyService;
}());
angular
    .module('App.currency.services', [])
    .service('currencyService', CurrencyService);
//# sourceMappingURL=services.js.map
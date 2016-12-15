'use strict';

angular.module('myApp.currency.services', [])

  .service('currencyService', ['$http', function ($http) {
    var url = "http://localhost:8000/api/currencies?callback=JSON_CALLBACK";
    this.fetchCurrencies = function (onSuccess, onError) {
      $http.jsonp(url).success(onSuccess).error(onError);
    }
  }])
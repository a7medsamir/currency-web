'use strict';

angular.module('myApp.currency', [
  'myApp.currency.services',
  'myApp.currency.directives',
  'ngRoute'
  ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/currency', {
      templateUrl: 'views/currency/index.html',
      controller: 'currencyCtrl'
    });
  }])

  .controller('currencyCtrl', ['$scope', '$http', 'currencyService', function ($scope, $http, currencyService) {
   
    $scope.CurrentCurrencyCode = "USD";
    $scope.CurreciesCodes = ["USD", "EUR", "SAR", "AED"];

    //to use on check expired cach
    $scope.LastUpdateDate = null;

    $scope.Orginallist = [];
    $scope.list = [];

    $scope.fetch = function (currencyCode) {
      currencyService.fetchCurrencies(
        function (result) {
          console.log("function fetch called" + new Date().getTime());
          $scope.Orginallist = result;
          $scope.list = formatCurrencyData(currencyCode, $scope.Orginallist.rates);
        },
        function (error) {
          console.log("function fetch called with error " + new Date().getTime());
        });
    };

    function formatCurrencyData(currencyCode, allDataRates) {
      var formatedData = [];
      for (var i = 0; i < allDataRates.length; i++) {
        var bankName = allDataRates[i].bank;
        var currencyObject = findCurrency(currencyCode, allDataRates[i].currencies)
        if (currencyObject == null) {
          currencyObject = { buy: 0, sell: 0 };
        }

        formatedData.push({
          bank: bankName,
          buy: currencyObject.buy,
          sell: currencyObject.sell
        });

      }
      return formatedData;
    }

    function findCurrency(currencyCode, currencies) {
      for (var i = 0; i < currencies.length; i++) {
        if (currencies[i].currency == currencyCode) {
          return currencies[i];
        }
      }
      return null;
    }

    $scope.Refresh = function (currencyCode) {
      console.log("function Refresh called" + new Date().getTime());

      $scope.CurrentCurrencyCode = currencyCode;
      $scope.fetch(currencyCode);
      return false;
    }
    //load by default current selected currency
    $scope.Refresh($scope.CurrentCurrencyCode);
  }]);
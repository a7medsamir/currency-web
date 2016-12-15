
'use strict';

angular.module('myApp.currency.directives', [])
.directive('currencyRates', function () {
    return {
      restrict: 'E',//element
      scope: {
        rates: '=', //// bindAttr: '='
        sortType :'@', //"buy",
        sortReverse :'@' //true
      },
      templateUrl: 'components/CurrencyRates/template.html'
    }
  })
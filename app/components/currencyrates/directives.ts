'use strict';

  angular.module('App.currency.directives', [])
    .directive('currencyRates', initDirective);

    function initDirective() {
      return {
        restrict: 'E',//element
        scope: {
          rates: '=', //// bindAttr: '='
          sortType: '@', //"buy",
          sortReverse: '@' //true
        },
        templateUrl: 'components/CurrencyRates/template.html'
      }
    }
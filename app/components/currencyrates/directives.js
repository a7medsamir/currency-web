'use strict';
angular.module('App.currency.directives', [])
    .directive('currencyRates', initDirective);
function initDirective() {
    return {
        restrict: 'E',
        scope: {
            rates: '=',
            sortType: '@',
            sortReverse: '@' //true
        },
        templateUrl: 'components/CurrencyRates/template.html'
    };
}
//# sourceMappingURL=directives.js.map
'use strict';
interface ICurrencyRate{
  bank:string;
  buy:string;
  sell:string;
}

class CurrencyController {
  static $inject = ['$scope', 'http', 'CurrencyService'];

  public scope: ng.IScope;
  public currencyService: CurrencyService;
  public CurrentCurrencyCode: string = "USD";
  public CurreciesCodes: Array<string> = ["USD", "EUR", "SAR", "AED"];
  public list: Array<ICurrencyRate> = [];

  constructor($scope: angular.IScope, $http: ng.IHttpService, CurrencyService: CurrencyService) {
    this.scope = $scope;
    this.scope["vm"]=this;
    this.currencyService = CurrencyService;

    //load by default current selected currency
    this.Refresh(this.CurrentCurrencyCode);
  }

  Fetch(currencyCode: string): void {
    this.currencyService.FetchCurrency(
      currencyCode,
       (result) => {
        this.list = result;
      },
       (error) => {
        console.log("function fetch called with error " + new Date().getTime());
      });
  }

  Refresh(currencyCode: string): void {
    console.log("function Refresh called" + new Date().getTime());
    this.CurrentCurrencyCode = currencyCode;
    this.Fetch(this.CurrentCurrencyCode);
  }
}

angular.module('App.currency', [
  'App.currency.services',
  'App.currency.directives'
])
  .controller('currencyCtrl', ['$scope', '$http', 'currencyService', CurrencyController]);
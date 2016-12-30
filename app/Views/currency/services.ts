'use strict';

class CurrencyService{
  public http: ng.IHttpService;
  public Url:string = "http://localhost:8000/api/currencies/";
  
  constructor ($http:ng.IHttpService){
    this.http = $http;
  }

  public FetchCurrency (CuurencyCode:string,onSuccess:ng.IHttpPromiseCallback<any>, onError:ng.IHttpPromiseCallback<any>):void {
    this.http.jsonp(this.Url + CuurencyCode+'?callback=JSON_CALLBACK').success(onSuccess).error(onError);
  }
}

angular
  .module('App.currency.services', [])
  .service('currencyService', CurrencyService);



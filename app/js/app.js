'use strict';

var angularRocksApp = angular.module('angularRocksApp', [
  'ngRoute',
  'controllers',
// 'services'
]);

angularRocksApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/band-list.html',
      controller: 'BandListCtrl'
    })
      .when('/:name', {
        templateUrl: 'partials/band-detail.html',
        controller: 'BandDetailCtrl'
      })
      .when('/foo', {
        templateUrl: 'partials/in-construction.html'
      })
      .when('/bar', {
        templateUrl: 'partials/in-construction.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

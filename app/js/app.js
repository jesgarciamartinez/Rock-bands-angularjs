'use strict';

var angularRocksApp = angular.module('angularRocksApp', [
  'ngRoute',
  'controllers'
]);

angularRocksApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/band-list.html',
      controller: 'BandListCtrl'
    })
      .when('/:name', {
        templateUrl: 'partials/band-detail.html',
        controller: 'BandListCtrl'
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

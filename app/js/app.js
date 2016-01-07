'use strict';

var angularRocksApp = angular.module('angularRocksApp', [
  'ngRoute',
  'controllers'
]);

var demo = angular.module('demo', ['ngRoute']);
demo.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'testController',
    templateUrl: 'test.html'
  });
});

angularRocksApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/band-list.html',
      controller: 'BandListCtrl'
    })
      .when('/:name', {
        templateUrl: 'partials/band-detail.html'
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

  /*    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });*/
  }
]);

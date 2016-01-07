'use strict';

var angularRocksApp = angular.module('angularRocksApp', [
  'ngRoute'
]);

angularRocksApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/bands-list.html'
    })
      .when('/the-beatles', {
        templateUrl: 'partials/band-detail.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);

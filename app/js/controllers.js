'use strict';

var controllers = angular.module('controllers', []);

function nameToUrl (name) {
  return name.split(' ')
    .map(function (str) {
      return str.toLowerCase();
    })
    .join('-');
}

controllers.controller('BandListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('bands/bands.json')
      .success(function (data) {
        console.log('bands', data);
        $scope.bands = data;
        $scope.nameToUrl = nameToUrl;
      });
  }
]);

controllers.controller('BandDetailCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
    $http.get('bands/' + $routeParams.name + '.json')
      .success(function (data) {
        console.log('detail', data);
        $scope.band = data;
        $scope.nameToUrl = nameToUrl;
      });
  }
]);

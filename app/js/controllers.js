'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('BandListCtrl', ['$scope',
  function ($scope) {
    $scope.bands = [{'name': 'the beatles'}, {'name': 'queen'}, {'name': 'the rolling stones'}];
  }]);

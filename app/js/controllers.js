'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('BandListCtrl', ['$scope',
  function ($scope) {
    $scope.bands = [{'name': 'the Beatles'}, {'name': 'queen'}, {'name': 'the rolling stones'}];
    $scope.nameToUrl = function (name) {
      return '#/' + name.split(' ').map(function (str) {return str.toLowerCase();}).join('-');
    };
  }]);

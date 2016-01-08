'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('BandListCtrl', ['$scope',
  function ($scope) {
    $scope.bands = [{'name': 'The Beatles'}, {'name': 'Queen'}, {'name': 'The Rolling Stones'}];
    $scope.nameToUrl = function (name) {
      return '#/' + name.split(' ').map(function (str) {return str.toLowerCase();}).join('-');
    };
  }]);

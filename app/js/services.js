'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('Band', ['$resource',
  function ($resource) {
    return $resource('bands.json', {}, {
      query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
    });
  }]);

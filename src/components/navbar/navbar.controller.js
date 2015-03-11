'use strict';

angular.module('nav', [])
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });

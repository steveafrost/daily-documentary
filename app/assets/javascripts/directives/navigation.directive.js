(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .directive('ddNavigation', ddNavigation);

  function ddNavigation() {
    return {
      restrict: 'E',
      templateUrl: 'navigation.html'
    };
  }
}());
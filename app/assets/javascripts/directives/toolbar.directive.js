(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .directive('ddToolbar', ddToolbar);

  function ddToolbar() {
    return {
      restrict: 'E',
      templateUrl: 'toolbar.html'
    };
  }
}());
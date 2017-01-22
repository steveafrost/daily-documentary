(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('DocDetailsController', DocDetailsController);

  function DocDetailsController($mdToast, $stateParams, $scope, docFactory, profileFactory) {
    var vm = this;
    vm.addToTimeline = addToTimeline;
    vm.addToWatchlist = addToWatchlist;
    vm.docDetails = [];
    vm.docActions = $stateParams.docActions;

    activate();

    function activate() {
      $scope.$emit('loading', true);
      docFactory.getDocDetails($stateParams.movie).then(function(data) {
        vm.docDetails = data;
        $scope.$emit('loading', false);
      });
    }

    function addToTimeline(docTitle) {
      return profileFactory.addToTimeline(docTitle)
                           .then(showMessage);

        function showMessage(response) {
          $mdToast.showSimple(response.pop().title + ' added to timeline');
        }
    }

    function addToWatchlist(docTitle) {
      return profileFactory.addToWatchlist(docTitle)
                           .then(showMessage);

        function showMessage(response) {
          $mdToast.showSimple(response.pop().title + ' added to watchlist');
        }
    }

  }

}());
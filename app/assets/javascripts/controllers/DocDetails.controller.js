(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('DocDetailsController', DocDetailsController);

  function DocDetailsController($mdToast, docActions, docDetails, profileFactory) {
    var vm = this;
    vm.addToTimeline = addToTimeline;
    vm.addToWatchlist = addToWatchlist;
    vm.docDetails = docDetails;
    vm.docActions = docActions;

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
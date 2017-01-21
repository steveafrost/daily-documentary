(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('DocDetailsController', DocDetailsController);

  function DocDetailsController($mdToast, $stateParams, docFactory, profileFactory) {
    var vm = this;
    vm.addToTimeline = addToTimeline;
    vm.addToWatchlist = addToWatchlist;
    vm.docDetails = [];
    vm.docActions = $stateParams.docActions;

    activate();

    function activate() {
      console.log(vm.docActions);
      console.log($stateParams);
      docFactory.getDocDetails($stateParams.movie).then(function(data) {
        vm.docDetails = data;
      });
      // docFactory.getDocActions($stateParams.movie).then(function(data) {
      //   vm.docActions = data;
      // });
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
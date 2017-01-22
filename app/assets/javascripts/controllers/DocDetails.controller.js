(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('DocDetailsController', DocDetailsController);

  DocDetailsController.$inject = ['$mdToast', '$stateParams', '$scope', 'docFactory', 'profileFactory'];

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

    function addToTimeline() {
      return profileFactory.addToTimeline(vm.docActions)
                           .then(showMessage);

        function showMessage(response) {
          $mdToast.showSimple(response.pop().title + ' added to timeline');
        }
    }

    function addToWatchlist() {
      return profileFactory.addToWatchlist(vm.docActions)
                           .then(showMessage);

        function showMessage(response) {
          $mdToast.showSimple(response.pop().title + ' added to watchlist');
        }
    }

  }

}());
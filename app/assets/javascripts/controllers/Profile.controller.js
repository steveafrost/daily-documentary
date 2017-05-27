(function() {
  'use-strict';

  angular
    .module('dailyDocumentary')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$mdToast', '$state', 'timeline', 'profileFactory', 'watchlist'];

  function ProfileController($mdToast, $state, timeline, profileFactory, watchlist) {
    var vm = this;

    vm.removeDoc = removeDoc;
    vm.getTimeline = getTimeline;
    vm.getWatchlist = getWatchlist;
    vm.timeline = timeline;
    vm.watchlist = watchlist;

    function getTimeline() {
      profileFactory.getTimeline()
                    .then(function(response) {
                      vm.timeline = response;
      });
    }

    function getWatchlist() {
      profileFactory.getWatchlist()
                    .then(function(response) {
                      vm.watchlist = response;
      });
    }

    function removeDoc(docId) {
      return profileFactory.removeDoc(docId)
                           .then(showMessage);

      function showMessage(message) {
        vm.getTimeline();
        vm.getWatchlist();
        $mdToast.showSimple(message);
      }
    }

  }

}());

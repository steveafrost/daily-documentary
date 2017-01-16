(function() {
  'use-strict';

angular.module('dailyDocumentary')
       .controller('ProfileController', ProfileController);

  function ProfileController(profileFactory, $state, $mdToast, timeline, watchlist) {
    var vm = this;

    vm.hello = "Hello, Steve";
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
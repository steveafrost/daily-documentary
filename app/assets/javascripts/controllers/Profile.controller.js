(function() {

angular.module('dailyDocumentary')
       .controller('ProfileController', ProfileController);

  function ProfileController(profileFactory, $state, $mdToast) {
    var vm = this;

    vm.hello = "Hello, Steve";
    vm.removeDoc = removeDoc;
    vm.timeline = profileFactory.timeline;
    vm.watchlist = profileFactory.watchlist;

    profileFactory.getTimeline.then(function(response) {
      vm.timeline = response.data;
    });

    profileFactory.getWatchlist.then(function(response) {
      vm.watchlist = response.data;
    });

    function removeDoc(docId) {
      return profileFactory.removeDoc(docId)
                           .then(showMessage);

      function showMessage(message) {
        $mdToast.showSimple(message);
      }
    }

  }

}());
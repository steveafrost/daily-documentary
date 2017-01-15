(function() {

angular.module('dailyDocumentary')
       .controller('ProfileController', ProfileController);

  function ProfileController(profileFactory, $scope) {
    var vm = this;

    vm.hello = "Hello, Steve";
    vm.timeline = profileFactory.timeline;
    vm.watchlist = profileFactory.watchlist;

    profileFactory.getTimeline.then(function(response) {
      vm.timeline = response.data;
    });

    profileFactory.getWatchlist.then(function(response) {
      vm.watchlist = response.data;
    });

  }

}());
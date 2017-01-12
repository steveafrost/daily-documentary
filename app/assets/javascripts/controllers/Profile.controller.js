(function() {

angular.module('dailyDocumentary')
       .controller('ProfileController', ProfileController);

  function ProfileController(profileFactory) {
    var vm = this;

    vm.hello = "Hello, Steve";
    vm.timeline = profileFactory.getTimeline();
    vm.watchlist = profileFactory.getWatchlist();
  }

}());
(function() {

angular.module('app')
       .controller('ProfileController', ProfileController);

  function ProfileController(profileFactory) {
    var vm = this;

    vm.timeline = profileFactory.getTimeline();
    vm.watchlist = profileFactory.getWatchlist();
  }

}());
(function() {

angular.module('app')
       .controller('Profile', Profile);

  function Profile(profileFactory) {
    var vm = this;

    vm.timeline = profileFactory.getTimeline();
    vm.watchlist = profileFactory.getWatchlist();
  }

}());
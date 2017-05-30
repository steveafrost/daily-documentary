(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('AppController', AppController);

  AppController.$inject = ['$mdSidenav', '$scope'];

  function AppController($mdSidenav, $scope) {
    var vm = this;
    vm.toggleNav = toggleNav;
    vm.happyChange = happyChange;
    vm.happyCount = 0;
    vm.tweetText = tweetText;
    vm.loading = false;

    $scope.$on('loading', function(event, data) {
      vm.loading = data;
    });

    function happyChange() {
      vm.happyCount++;
    }

    function toggleNav() {
      $mdSidenav('left').toggle();
    }

    function tweetText() {
      return "https://twitter.com/intent/tweet?text=Daily%20Documentary%20helps%20you%20find,%20watch,%20and%20keep%20track%20of%20captivating%20documentaries%20-%20check%20it%20out%20@%20daily-documentary.herokuapp.com";
    }
  }

}());

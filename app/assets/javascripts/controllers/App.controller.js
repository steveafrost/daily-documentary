(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('AppController', AppController);

  function AppController($mdSidenav) {
    var vm = this;
    vm.toggleNav = toggleNav;
    vm.happyChange = happyChange;
    vm.happyCount = 0;

    function happyChange() {
      vm.happyCount++;
    }

    function toggleNav() {
      $mdSidenav('left').toggle();
    }
  }

}());
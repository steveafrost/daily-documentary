(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('AppController', AppController);

  function AppController($mdSidenav) {
    var vm = this;
    vm.toggleNav = toggleNav;

    function toggleNav() {
      $mdSidenav('left').toggle();
    }
  }

}());
(function() {
  'use strict';

  angular
    .module('dailyDocumentary')
    .controller('DocDetailsController', DocDetailsController);

  function DocDetailsController(docDetails) {
    var vm = this;

    vm.docDetails = docDetails;
  }
}());
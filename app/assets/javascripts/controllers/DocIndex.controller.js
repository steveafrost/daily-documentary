(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', ['DocFactory', function() {

      var vm = this;

      vm.docList = [];

    }]);
}());
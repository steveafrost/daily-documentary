(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', ['DocFactory', function(DocFactory) {

      var vm = this;

      vm.docList = [];

      DocFactory.getDocList()

    }]);
}());
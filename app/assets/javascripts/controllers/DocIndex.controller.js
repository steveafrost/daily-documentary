(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', ['DocFactory', function(DocFactory) {

      var vm = this;

      vm.docList = [];
      vm.docDetails = DocFactory.getDocDetails()
                                .then(setDocDetails);
      vm.docString = '';

      DocFactory.getDocList()
                .then(setDocList);

      function setDocList(data) {
        vm.docList = data;
      }

      function setDocDetails(data) {
        vm.docString = data;
      }

    }]);
}());
(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', ['DocFactory', function(DocFactory) {

      var vm = this;

      vm.docList = [];
      vm.docDetails = DocFactory.getDocDetails;

      DocFactory.getDocList()
                .then(setDocList);

      function setDocList(data) {
        vm.docList = data;
      }

    }]);
}());
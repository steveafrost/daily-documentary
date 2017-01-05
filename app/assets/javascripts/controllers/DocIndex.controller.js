(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', ['DocFactory', function(DocFactory) {

      var vm = this;

      vm.docList = [];
      vm.docDetails = '';

      DocFactory.getDocList()
                .then(setDocList);

      DocFactory.getDocDetails(this)
                .then(setDocDetails);

      function setDocList(data) {
        vm.docList = data;
      }

      function setDocDetails(data) {
        vm.docDetails = data;
      }

    }]);
}());
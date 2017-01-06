(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController(docFactory) {

      var vm = this;

      vm.docList = [];
      vm.docDetails = docFactory.getDocDetails;

      docFactory.getDocList()
                .then(setDocList);

      function setDocList(data) {
        vm.docList = data;
      }
    }

}());
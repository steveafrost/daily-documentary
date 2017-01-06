(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController(docFactory) {

      var vm = this;
      vm.docList = [];
      vm.docDetails = '';
      vm.getDetails = function(doc) {
        docFactory.getDocDetails(doc)
                  .then(setDocDetails);
      };

      docFactory.getDocList()
                .then(setDocList);

      function setDocList(data) {
        vm.docList = data;
      }

      function setDocDetails(data) {
        vm.docDetails = data;
      }
    }

}());
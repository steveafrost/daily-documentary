(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController(docFactory) {

      var vm = this;
      vm.docList = [];
      vm.currentDoc = false;
      vm.docDetails = {};
      vm.getDetails = function(doc, index) {
        if (vm.currentDoc === index + 1) return vm.currentDoc = false;
        vm.currentDoc = index + 1;
        docFactory.getDocDetails(doc)
                  .then(setDocDetails);
      };
      vm.addToTimeline = function(docTitle) {
        docFactory.addToTimeline(docTitle);
      };
      vm.addToWatchlist = function(docTitle) {
        docFactory.addToWatchlist(docTitle);
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
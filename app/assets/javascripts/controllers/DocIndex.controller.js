(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController(docFactory) {

      var vm = this;
      vm.docList = [];
      vm.currentDoc = false;
      vm.docDetails = {};
      vm.getDetails = getDetails;
      vm.addToTimeline = addToTimeline;
      vm.addToWatchlist = addToWatchlist;

      docFactory.getDocList()
                .then(setDocList);

      function addToTimeline(docTitle) {
        docFactory.addToTimeline(docTitle);
      }

      function addToWatchlist(docTitle) {
        docFactory.addToWatchlist(docTitle);
      }

      function getDetails(doc, index) {
        if (vm.currentDoc === index + 2) {
          vm.currentDoc = false;
        } else {
          vm.currentDoc = index + 2; //fix numbering before launch
          docFactory.getDocDetails(doc)
                    .then(setDocDetails);
        }
      }

      function setDocDetails(data) {
        vm.docDetails = data;
      }

      function setDocList(data) {
        vm.docList = data;
      }

    }

}());
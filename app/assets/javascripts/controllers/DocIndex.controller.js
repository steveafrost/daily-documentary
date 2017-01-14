(function() {

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController(docFactory, profileFactory) {

      var vm = this;
      vm.addToTimeline = addToTimeline;
      vm.addToWatchlist = addToWatchlist;
      vm.currentDoc = false;
      vm.docDetails = {};
      vm.docList = [];
      vm.getDetails = getDetails;
      vm.getDocList = getDocList();

      function addToTimeline(docTitle) {
        profileFactory.addToTimeline(docTitle);
      }

      function addToWatchlist(docTitle) {
        profileFactory.addToWatchlist(docTitle);
      }

      function getDetails(doc, index) {
        if (vm.currentDoc === index) {
          vm.currentDoc = false;
        } else {
          vm.currentDoc = index; //fix numbering before launch
          docFactory.getDocDetails(doc)
                    .then(setDocDetails);
        }
      }

      function getDocList() {
        docFactory.getDocList()
                  .then(setDocList);
      }

      function setDocDetails(data) {
        vm.docDetails = data;
      }

      function setDocList(data) {
        vm.docList = data;
      }

    }

}());
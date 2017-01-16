(function() {
  'use-strict';

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController(docFactory, profileFactory, $mdToast) {

      var vm = this;
      vm.addToTimeline = addToTimeline;
      vm.addToWatchlist = addToWatchlist;
      vm.currentDoc = false;
      vm.docDetails = {};
      vm.docList = [];
      vm.getDetails = getDetails;
      vm.prettyUrl = prettyUrl;

      activate();

      function activate() {
        getDocList();
      }

      function addToTimeline(docTitle) {
        return profileFactory.addToTimeline(docTitle)
                             .then(showMessage);
          function showMessage(response) {
            $mdToast.showSimple(response.pop().title + 'added to timeline');
          }
      }

      function addToWatchlist(docTitle) {
        profileFactory.addToWatchlist(docTitle);
      }

      function getDetails(doc) {
        if (vm.currentDoc !== doc.id) {
          docFactory.getDocDetails(doc.title).then(setDocDetails);
          vm.currentDoc = doc.id;
        } else {
          vm.currentDoc = false;
        }
      }

      function getDocList() {
        docFactory.getDocList().then(setDocList);
      }

      function prettyUrl(string) {
        return string.trim().replace(/\s/g, '-').toLowerCase();
      }

      function setDocDetails(data) {
        vm.docDetails = data;
      }

      function setDocList(data) {
        vm.docList = data;
      }

    }

}());
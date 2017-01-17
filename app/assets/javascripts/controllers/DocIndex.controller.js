(function() {
  'use-strict';

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController(docFactory, profileFactory, $mdToast, $state) {

      var vm = this;
      vm.addToTimeline = addToTimeline;
      vm.addToWatchlist = addToWatchlist;
      vm.docDetails = {};
      vm.docList = [];
      vm.getDetails = getDetails;
      vm.prettyUrl = prettyUrl;

      activate();

      function activate() {
        docFactory.getDocList().then(setDocList);
      }

      function addToTimeline(docTitle) {
        return profileFactory.addToTimeline(docTitle)
                             .then(showMessage);
          function showMessage(response) {
            $mdToast.showSimple(response.pop().title + 'added to timeline');
          }
      }

      function addToWatchlist(docTitle) {
        return profileFactory.addToWatchlist(docTitle)
                             .then(showMessage);
          function showMessage(response) {
            $mdToast.showSimple(response.pop().title + 'added to watchlist');
          }
      }

      function getDetails(doc) {
        docFactory.getDocDetails(doc.title).then(setDocDetails);
      }

      function prettyUrl(string) {
        return string.trim().replace(/\s/g, '-').toLowerCase();
      }

      function setDocDetails(data) {
        vm.docDetails = data;
        debugger;
        console.log(vm.docDetails);
        $state.go('details');
      }

      function setDocList(data) {
        vm.docList = data;
      }

    }

}());
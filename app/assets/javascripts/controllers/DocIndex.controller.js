(function() {
  'use-strict';

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    function DocIndexController($mdToast, $state, docFactory, profileFactory) {

      var vm = this;
      vm.addToTimeline = addToTimeline;
      vm.addToWatchlist = addToWatchlist;
      vm.docList = [];
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

      function prettyUrl(string) {
        return string.trim().replace(/\s/g, '-').toLowerCase();
      }

      function setDocList(data) {
        vm.docList = data;
      }

    }

}());
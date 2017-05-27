(function() {
  'use-strict';

  angular
    .module('dailyDocumentary')
    .controller('DocIndexController', DocIndexController);

    DocIndexController.$inject = ['$mdToast', '$scope', 'docFactory', 'profileFactory'];

    function DocIndexController($mdToast, $scope, docFactory, profileFactory) {

      var vm = this;
      vm.addToTimeline = addToTimeline;
      vm.addToWatchlist = addToWatchlist;
      vm.docList = [];
      vm.prettyUrl = prettyUrl;

      activate();

      function activate() {
        $scope.$emit('loading', true);
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
        return docFactory.prettyUrl(string);
      }

      function setDocList(data) {
        vm.docList = data;
        $scope.$emit('loading', false);
      }

    }

}());

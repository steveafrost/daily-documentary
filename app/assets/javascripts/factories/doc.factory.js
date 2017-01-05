(function() {

  angular
    .module('dailyDocumentary')
    .factory('DocFactory', ['$http', function($http) {

      return {
        getDocList: getDocList,
        getDocDetails: getDocDetails
      };

      function getDocList() {
        return $http.get('https://www.reddit.com/r/documentaries.json')
                    .then(handleResponse);
      }

      function handleResponse(response) {
        var allDocs = response.data.data.children;
        var docTitles = [];

        for (var i = 0; i < allDocs.length; i++) {
          docTitle = allDocs[i].data.title.toString();
          docTitle = docTitle.substring(0, docTitle.indexOf('('));
          docTitles.push(docTitle);
          console.log(docTitle);
        }

        return docTitles;
      }

      function getDocDetails() {}

    }]);
}());
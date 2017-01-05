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
                    .then(handleList);
      }

      function handleList(response) {
        var allDocs = response.data.data.children;
        var docTitles = [];

        for (var i = 0; i < allDocs.length; i++) {
          docTitle = allDocs[i].data.title.toString();
          docTitle = docTitle.substring(0, docTitle.indexOf('('));
          docTitles.push(docTitle);
        }

        return docTitles;
      }

      function getDocDetails(doc) {
        return $http.get('http://www.omdbapi.com/?t=' + doc + '&y=&plot=short&r=json')
                    .then(handleDetails);
      }

      function handleDetails(response) {
        console.log(response);
      }

    }]);
}());
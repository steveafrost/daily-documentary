(function() {

  angular
    .module('dailyDocumentary')
    .factory('docFactory', docFactory);

    function docFactory($http) {

      return {
        getDocList: getDocList,
        getDocDetails: getDocDetails
      };

      function getDocList() {
        return $http.get('https://www.reddit.com/r/documentaries.json')
                    .then(handleList);
      }

      function getDocDetails(docTitle) {
        concatTitle = docTitle.replace(/\ /g, "+");
        return $http.get('http://www.omdbapi.com/?t=' + concatTitle + '&y=&plot=short&r=json')
                    .then(handleDetails)
                    .catch(handleError);
      }

      function handleDetails(response) {
        return response.data;
      }

      function handleError(error) {
        return error;
      }

      function handleList(response) {
        var allDocs = response.data.data.children;
        var docList = [];

        allDocs.forEach(function(element, index) {
          docInfo = element.data;
          docTitle = docInfo.title.substring(0, docInfo.title.indexOf('('));
          docUrl = docInfo.url;
          if (docTitle !== "") {
            docList.push({id: index, title: docTitle, url: docUrl});
          }
        });
        return docList;
      }





    }
}());
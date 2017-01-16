(function() {
  'use-strict';

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
          docPattern = /[$&+,:;=?@#|'<>.^*()%!-]/;
          docTitle = trimToFirstSymbol(titleCase(docInfo.title));
          docUrl = docInfo.url;
          if (docTitle !== "" && !docTitle.includes("Request")) {
            docList.push({id: index, title: docTitle, url: docUrl});
          }
        });
        return docList;
      }

      function titleCase(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      function trimToFirstSymbol(str) {
        allSymbols = (/[$&+,:;=?@#|'<>.^*()%!-]/);
        return str.substring(0, str.search(allSymbols));
      }



    }
}());
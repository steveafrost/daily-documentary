(function() {

  angular
    .module('dailyDocumentary')
    .factory('docFactory', docFactory);

    function docFactory($http) {

      return {
        getDocList: getDocList,
        getDocDetails: getDocDetails,
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
          if (docTitle !== "") docTitles.push({id: [i], title: docTitle});
        }
        return docTitles;
      }

      function getDocDetails(docTitle) {
        concatTitle = docTitle.replace(/\ /g, "+");
        console.log(concatTitle);
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

    }

}());
(function() {
  'use-strict';

  angular
    .module('dailyDocumentary')
    .factory('docFactory', docFactory);

    docFactory.$inject = ['$http'];

    function docFactory($http) {

      return {
        getDocList: getDocList,
        getDocDetails: getDocDetails,
        prettyUrl: prettyUrl,
        titleCase: titleCase,
        trimToYearMarker: trimToYearMarker
      };

      function getDocList() {
        return $http.get('https://www.reddit.com/r/Documentaries/top.json')
                    .then(handleList)
                    .catch(handleError);
      }

      function getDocDetails(docTitle) {
        concatTitle = docTitle.replace(/\ /g, "+");
        return $http.get('http://www.omdbapi.com/?t=' + concatTitle + '&y=&plot=full&r=json&apikey=6ce37ef1')
                    .then(handleDetails)
                    .catch(handleError);
      }

      function handleDetails(response) {
        return response.data;
      }

      function handleDocActions(response) {
        docInfo = response.data.data.children[0].data;
        docTitle = trimToYearMarker(titleCase(docInfo.title));
        docUrl = docInfo.url;
        return {docTitle: docTitle, docUrl: docUrl.trim()};
      }

      function handleError(error) {
        return error;
      }

      function handleList(response) {
        var allDocs = response.data.data.children;
        var docList = [];

        angular.forEach(allDocs, function(doc, index) {
          docInfo = doc.data;
          docTitle = trimToYearMarker(titleCase(docInfo.title));
          docUrl = docInfo.url;
          docImage = docInfo.preview.images[0].source.url;
          if (docTitle !== "" && !docTitle.includes("Request")) {
            docList.push({id: index, title: docTitle, url: docUrl, image: docImage});
          }
        });
        return docList;
      }

      function prettyUrl(string) {
        return string.trim().replace(/\s/g, '-').toLowerCase();
      }

      function titleCase(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      function trimToYearMarker(str) {
        // yearMarker = (/\:\s\(\d{4}\)|\(\d{4}\)/);
        // return str.replace(yearMarker, "");
        yearMarker = (/\(\d/);
        return str.substring(0, str.search(yearMarker));
      }

    }

}());

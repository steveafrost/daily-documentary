(function() {

  angular
    .module('dailyDocumentary')
    .factory('docFactory', docFactory);

    function docFactory($http) {

      return {
        getDocList: getDocList,
        getDocDetails: getDocDetails,
        addDocToTimeline: addDocToTimeline
      };

      function getDocList() {
        return $http.get('https://www.reddit.com/r/documentaries.json')
                    .then(handleList);
      }

      function handleList(response) {
        var allDocs = response.data.data.children;
        var docList = [];

        for (var i = 0; i < allDocs.length; i++) {
          docTitle = allDocs[i].data.title.toString();
          docUrl = allDocs[i].data.url.toString();
          docTitle = docTitle.substring(0, docTitle.indexOf(' ('));
          if (docTitle !== "") docList.push({id: [i], title: docTitle, url: docUrl});
        }
        return docList;
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

      function addDocToTimeline(title) {
        var data = $.param({"documentary":{
            "title": title,
            "timeline": true,
            "watchlist": false
        }});

        var config = {
          headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
        };

        $http.post("/api/documentaries", data, config).then(function(data, status, config) {
            console.log(data);
        });
      }

    }

}());
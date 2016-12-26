function getDocList($http) {
  $http.get('https://www.reddit.com/r/documentaries.json')
      .then(function(response) {

      });
}

angular
  .module('dailyDocumentary')
  .service('getDocList', getDocList);
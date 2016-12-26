dailyDocumentary.service('getDocList', ['$http', function($http) {
  $http.get('https://www.reddit.com/r/documentaries.json')
      .then(function(response) {
        debugger;
      });

}]);
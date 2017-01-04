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
        return response.data.data.children;
      }

      function getDocDetails() {}

    }]);
}());
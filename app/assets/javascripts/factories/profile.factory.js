(function() {

  angular
    .module('dailyDocumentary')
    .factory('profileFactory', profileFactory);

    function profileFactory($http) {

      return {
        getTimeline: getTimeline,
        getWatchlist: getWatchlist
      };

      function getTimeline($http) {
        return $http.get('/api/documentaries')
                    .then(handleResponse)
                    .catch(handleError);
      }

      function getWatchlist($http) {
        return $http.get('/api/documentaries')
                    .then(handleResponse)
                    .catch(handleError);
      }

      function handleResponse(response) {
        console.log(response);
        return response;
      }

      function handleError(error) {
        console.log(error);
        return error;
      }

    }

}());
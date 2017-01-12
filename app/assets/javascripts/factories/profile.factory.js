(function() {

  angular
    .module('dailyDocumentary')
    .factory('profileFactory', profileFactory);

    function profileFactory($http) {

      return {
        getTimeline: getTimeline,
        getWatchlist: getWatchlist
      };

      function getTimeline() {
        return $http.get('/api/timeline')
                    .then(handleResponse)
                    .catch(handleError);
      }

      function getWatchlist() {
        return $http.get('/api/watchlist')
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
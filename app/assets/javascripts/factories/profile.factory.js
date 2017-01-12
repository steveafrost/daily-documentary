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
                    .then(handleTimeline);
      }

      function handleTimeline(response) {
        console.log(response);
      }

      function getWatchlist($http) {
        return $http.get('/api/documentaries')
                    .then(handleWatchlist);
      }

      function handleWatchlist(response) {
        console.log(response);
      }

    }

}());
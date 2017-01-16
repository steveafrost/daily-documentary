(function() {
  'use-strict';

  angular
    .module('dailyDocumentary')
    .factory('profileFactory', profileFactory);

    function profileFactory($http) {

      return {
        addToTimeline: addToTimeline,
        addToWatchlist: addToWatchlist,
        getTimeline: getTimeline,
        getWatchlist: getWatchlist,
        removeDoc: removeDoc
      };

      function addToTimeline(title) {
        var req = {
          method: 'POST',
          url: '/api/documentaries',
          headers: {
            'Profile-Type': 'timeline',
            'Content-Type': 'application/json'
          },
          data: {
            "documentary":{
              "title": title,
              "timeline": true,
              "watchlist": false
            }
          }
        };

        return $http(req)
                    .then(updateTimeline);

        function updateTimeline(response) {
          return response.data;
        }
      }

      function addToWatchlist(title) {
        var req = {
          method: 'POST',
          url: '/api/documentaries',
          headers: {
            'Profile-Type': 'watchlist',
            'Content-Type': 'application/json'
          },
          data: {
            "documentary":{
              "title": title,
              "timeline": false,
              "watchlist": true
            }
          }
        };

        return $http(req)
                    .then(updateWatchlist);

        function updateWatchlist(response) {
          return response.data;
        }
      }

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
        return response.data;
      }

      function handleError(error) {
        console.log(error);
        return error;
      }

      function removeDoc(docId) {
        var req = {
          method: 'DELETE',
          url: '/api/documentaries/' + docId,
          headers : {
            'Content-Type': 'application/json'
          }
        };

        return $http(req)
                    .then(handleDelete);

        function handleDelete(response) {
          return response.data.message;
        }
      }

    }

}());
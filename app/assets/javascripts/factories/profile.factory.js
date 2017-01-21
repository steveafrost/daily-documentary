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
                    .then(handleResponse);
      }

      function addToWatchlist(title) {
        console.log('this is the title' + title);
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
                    .then(handleResponse);
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

      function handleDelete(response) {
        return response.data.message;
      }

      function handleError(error) {
        return error;
      }

      function handleResponse(response) {
        return response.data;
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
      }

    }

}());
(function() {

  angular
    .module('dailyDocumentary')
    .factory('profileFactory', profileFactory);

    function profileFactory($http) {

      return {
        addToTimeline: addToTimeline,
        addToWatchlist: addToWatchlist,
        getTimeline: getTimeline(),
        getWatchlist: getWatchlist(),
        timeline: [],
        watchlist: []
      };

      function addToTimeline(title) {
        var data = $.param({"documentary":{
            "title": title,
            "timeline": true,
            "watchlist": false
        }});

        var config = {
          headers : {
            'Profile-Type': 'timeline',
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
        };

        $http.post("/api/documentaries", data, config).then(function(response) {
          console.log(data + 'added to timeline');
          console.log('rails responded with' + response.data);
          angular.copy(response.data, profileFactory.timeline);
        });
      }

      function addToWatchlist(title) {
        var data = $.param({"documentary":{
            "title": title,
            "timeline": false,
            "watchlist": true
        }});

        var config = {
          headers : {
            'Profile-Type': 'watchlist',
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
        };

        $http.post("/api/documentaries", data, config).then(function(response) {
          console.log(data + 'added to watchlist');
          angular.copy(response.data, profileFactory.watchlist);
        });
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
        console.log(response);
        return response;
      }

      function handleError(error) {
        console.log(error);
        return error;
      }

    }

}());
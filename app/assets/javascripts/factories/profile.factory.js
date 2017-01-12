(function() {

  angular
    .module('dailyDocumentary')
    .factory('profileFactory', profileFactory);

    function profileFactory($http) {

      return {
        getTimeline: getTimeline,
        getWatchlist: getWatchlist
      };

    }

}());
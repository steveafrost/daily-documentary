 angular
  .module('dailyDocumentary', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('home.profile', {
        url: 'profile',
        templateUrl: 'views/profile.html'
      })
      .state('home.timeline', {
        url: 'timeline',
        templateUrl: 'views/timeline.html'
      })
      .state('home.watchlist', {
        url: 'watchlist',
        templateUrl: 'views/watchlist.html'
      })
      .state('documentaries', {
        url: '/documentaries',
        templateUrl: 'views/documentaries.html'
      })
      .state('documentaries.details', {
        url: '/:movie/details',
        templateUrl: 'views/details.html'
      });

    $urlRouterProvider.otherwise('/');
  });
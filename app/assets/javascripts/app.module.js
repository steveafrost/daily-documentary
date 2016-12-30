 angular
  .module('dailyDocumentary', ['ui.router', 'templates'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'profile.html'
      })
      .state('home.timeline', {
        url: '/timeline',
        templateUrl: 'timeline.html'
      })
      .state('home.watchlist', {
        url: '/watchlist',
        templateUrl: 'watchlist.html'
      })
      .state('documentaries', {
        url: '/documentaries',
        templateUrl: 'documentaries.html'
      })
      .state('documentaries.details', {
        url: '/:movie/details',
        templateUrl: 'details.html'
      });

    $urlRouterProvider.otherwise('/');
  });
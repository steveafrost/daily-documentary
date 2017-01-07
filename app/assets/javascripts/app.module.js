 angular
  .module('dailyDocumentary', ['ui.router', 'templates', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile.html'
      })
      .state('profile.timeline', {
        url: '/timeline',
        templateUrl: 'timeline.html'
      })
      .state('profile.watchlist', {
        url: '/watchlist',
        templateUrl: 'watchlist.html'
      })
      .state('documentaries', {
        url: '/documentaries',
        templateUrl: 'documentaries.html',
      })
      .state('documentaries.details', {
        url: '/:movie/details',
        templateUrl: 'details.html'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('deep-purple')
      .accentPalette('deep-purple');
  });
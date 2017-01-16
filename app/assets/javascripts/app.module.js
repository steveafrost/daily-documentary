(function() {
  'use-strict';

  angular
    .module('dailyDocumentary', ['ui.router', 'templates', 'ngMaterial', 'ngMdIcons'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html'
        })
        .state('documentaries', {
          url: '/documentaries',
          templateUrl: 'documentaries.html',
          controller: 'DocIndexController',
          controllerAs: 'vm'
        })
        .state('documentaries.details', {
          url: '/:movie/details',
          templateUrl: 'details.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'profile.html',
          controller: 'ProfileController',
          controllerAs: 'vm'
        })
        .state('profile.timeline', {
          url: '/timeline',
          templateUrl: 'timeline.html'
        })
        .state('profile.watchlist', {
          url: '/watchlist',
          templateUrl: 'watchlist.html'
        });

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);

      $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('deep-purple');
  });

}());
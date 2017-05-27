(function() {
  'use-strict';

  angular
    .module('dailyDocumentary', ['ui.router', 'templates', 'ngMaterial', 'angular-timeline'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
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
        .state('details', {
          url: '/documentaries/:movie',
          templateUrl: 'details.html',
          controller: 'DocDetailsController',
          controllerAs: 'vm',
          params: {docActions: false}
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'profile.html',
          controller: 'ProfileController',
          controllerAs: 'vm',
          resolve: {
            timeline: ['profileFactory', function(profileFactory) {
              return profileFactory.getTimeline();
            }],
            watchlist: ['profileFactory', function(profileFactory) {
              return profileFactory.getWatchlist();
            }]
          }
        })
        .state('profile.timeline', {
          url: '/timeline',
          templateUrl: 'timeline.html',

        })
        .state('profile.watchlist', {
          url: '/watchlist',
          templateUrl: 'watchlist.html'
        });

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('deep-purple');
  }]);

}());

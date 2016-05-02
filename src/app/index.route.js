(function() {
  'use strict';

  angular
    .module('ishop')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/index.html',
        controllerAs : 'home'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html'
      })

      .state('orderonline', {
        url: '/orderonline',
        templateUrl: 'app/orderonline/orderonline.html',
        controller: 'OrderOnlineController',
        controllerAs: 'order'

      })

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
      })

      .state('reservation', {
        url: '/reservation',
        templateUrl: 'app/reservation/reservation.html'
      });


    $urlRouterProvider.otherwise('/');
  }

})();

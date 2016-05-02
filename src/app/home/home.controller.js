(function() {
  'use strict';

  angular
    .module('ishop')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, webDevTec, toastr,$stateParams,$http) {
    var vm = this;
    vm.classAnimation = '';
    vm.creationDate = 1457873297619;
    vm.myInterval = 5000;
    vm.noWrapSlides = false;
    vm.active = 0;
    var slides = vm.slides = [];
    var currIndex = 0;
    vm.slides = [
      {
        image: 'assets/images/1.png'
      },
      {
          image: 'assets/images/2.png'
      },
      {
        image: 'assets/images/1.png'
      },
      {
        image: 'assets/images/2.png'
      }
    ];

  }
})();

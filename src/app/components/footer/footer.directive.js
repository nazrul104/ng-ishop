(function() {
  'use strict';

  angular
    .module('ishop')
    .directive('myFooter', myfooter);

  /** @ngInject */
  function myfooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: footerController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function footerController(moment,$window) {
      var vm = this;
      vm.windowHeight = $window.innerHeight;
      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

    }
  }

})();

/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('ishop')
    .constant('malarkey', malarkey)
    .constant('datasource', "http://localhost/API-shop_test/mobile_api_router.php")
    constant('restaurant_id','72')
    .constant('moment', moment);

})();

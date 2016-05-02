(function() {
  'use strict';

  angular
    .module('ishop')
    .factory('basket', function ($window,$filter) {

      var cartData={"OrderList":[]};
      var isLogged = false;
      var logged_Id = 0;
      var restaurant_menu =null;
      return {
        setCartData:function(data)
        {

          if($window.localStorage.getItem("cdata")!=null)
          {
               cartData =angular.fromJson($window.localStorage.getItem("cdata"));
               cartData.OrderList.push(data);
               $window.localStorage.setItem("cdata",angular.toJson(cartData));
          }else
          {

               cartData.OrderList.push(data);

               $window.localStorage.setItem("cdata",angular.toJson(cartData));
          }
        },
        getCartData:function()
        {
            cartData =$window.localStorage.getItem("cdata");
           return cartData;
        },
        updateCartdata:function(i,data)
        {
            cartData =angular.fromJson($window.localStorage.getItem("cdata"));
            cartData.OrderList[i]=data;
            $window.localStorage.setItem("cdata",angular.toJson(cartData));
        },
         cartTotalAmount:function()
        {
            var total=0.00;
            cartData =angular.fromJson($window.localStorage.getItem("cdata"));
             cartData.OrderList.forEach(function(e)
            {
                total=total+(parseFloat(e.item_price)*e.item_unit);
            });
             return total;
        },
          cartDataCounter:function()
        {
              var t=0;
             cartData =angular.fromJson($window.localStorage.getItem("cdata"));
            cartData.OrderList.forEach(function(e)
            {
            t=t+e.item_unit;
            });

           return t;
        },
        cartIncreaseQuantity : function(item_id)
        {
           cartData =angular.fromJson($window.localStorage.getItem("cdata"));
           angular.forEach(cartData.OrderList,function(e,i){

              if(item_id == e.item_id){
                 var newdata = {item_id: e.item_id,item_name: e.item_name,item_price: e.item_price,item_unit:parseInt(e.item_unit)+1};
                 cartData.OrderList[i] = newdata;
                 $window.localStorage.setItem("cdata",angular.toJson(cartData));
              }

           });
        },
        cartMinusQuantity : function(item_id)
        {
          cartData =angular.fromJson($window.localStorage.getItem("cdata"));
          angular.forEach(cartData.OrderList,function(e,i){

             if(item_id == e.item_id){
               if (e.item_unit>1) {
                 var newdata = {item_id: e.item_id,item_name: e.item_name,item_price: e.item_price,item_unit:parseInt(e.item_unit)-1};
                 cartData.OrderList[i] = newdata;
                 $window.localStorage.setItem("cdata",angular.toJson(cartData));
               }
             }

          });
        },
        setRestaurantMenu:function(menu)
        {
          restaurant_menu = menu;
        },
        getRestaurantMenu:function(){
          return restaurant_menu;
        }

      };
    })

})();

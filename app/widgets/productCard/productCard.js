/* 
 * Product Widget
 */


var productCard = angular.module("w_productCard",['ngAnimate']);
var productCardTemplate = "app/widgets/productCard/template.html";

productCard.directive('productCard', function () {
    return{
        restrict: 'E',
        templateUrl: productCardTemplate,
        replace: true,
        scope: {
            displayObject:"=",
            displayType:"@",
            displaySize:"@"
        },
        controller: 'ProductCardCtrl',
        link: function (scope, elm, attrs, ngmodel) {
            
        }
    };
});

productCard.controller("ProductCardCtrl", function ($scope, $element, $attrs, ServerComm)
{
    
    $scope.product_detResult = {};
    $scope.productDetails = true;
    alert($scope.productDetails)
   //Set proper render settings
    console.log("Product card");
   if($scope.displayType === "card"){
       if($scope.displaySize === undefined || $scope.displaySize === null){
           $scope.displaySize = "col-sm-6 col-md-4 col-lg-3";
       }
   }
   else if(($scope.displayType === "list")){
       //Set Parameters for list
   }
   else{
       $scope.displaySize = "col-sm-6 col-md-4 col-lg-3";
   }

    //Get Product details
   $scope.openProductDetails = function (ProductID)
   {
       debugger
       $scope.productDetails = false;
      
       var url = "http://webservice.linknetwork.dk/api/language_code/products/" + ProductID;
       
       ServerComm.getData("get", url).then(function (result)
       {
           debugger
           $scope.product_detResult = result.data;
           console.log("Product Details widget");
           console.log(result);
       });
   }
});
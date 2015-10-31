/* 
 * Product Widget
 */


var productDetails = angular.module("w_productDetails", ['ngAnimate']);
var productDetailsTemplate = "app/widgets/productDetails/template.html";

productDetails.directive('productDetails', function ()
{
    return{
        restrict: 'E',
        templateUrl: productDetailsTemplate,
        replace: true,
        scope: {
            ngModel :"=",
            displayObject:"=",
            displayType:"@",
            displaySize:"@"
        },
        controller: 'productDetailsCtrl',
        link: function (scope, elm, attrs, ngmodel) {
            
        }
    };
});

productDetails.controller("productDetailsCtrl", function ($scope, $element, $attrs, ServerComm)
{
   debugger
    //Get Product details based on product id
    console.log("Product Details Widget");
    $scope.ngModel = {};
    var url = "http://webservice.linknetwork.dk/api/language_code/products/127";
    ServerComm.getData("get", url).
      then(function (result)
      {
          $scope.ngModel = result;
          console.log("Get product details");
          console.log(result);
      });
});
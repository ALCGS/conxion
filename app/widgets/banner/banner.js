/* 
 * Product Widget
 */


var banner = angular.module("w_banner",['ngAnimate']);
var bannerTemplate = "app/widgets/banner/template.html";

banner.directive('banner', function () {
    return{
        restrict: 'E',
        templateUrl: bannerTemplate,
        replace: true,
        scope: {
            ngModel: "=",
            displaySeconds : "=",
            displayCount:"@",
            displayCaption:"@",
            displayHeight:"@"
        },
        controller: 'BannerCtrl',
        link: function (scope, elm, attrs, ngmodel) {
            
        }
    };
});

banner.controller("BannerCtrl", function ($scope, $element, $attrs,ServerComm) {
    //Set banner image     
    $scope.total_bannerResult = {};
    $scope.bannerResult = {};
    //var url = "http://webservice.linknetwork.dk/api/en/billboard/13";
    var url ="http://demo2110741.mockable.io/api/banner";
    ServerComm.getData("GET", url).
                     then(function (result)
                     {
                         $scope.Seconds =$scope.displaySeconds;
                         console.log(result);
                         $scope.bannerResult = result;

                         //$scope.total_bannerResult = result;
                         //$scope.displayType = "";
                         //if ($scope.displayCount === undefined || $scope.displayCount === null)
                         //{
                         //    $scope.displayCount = 3;
                         //}
                         //if ($scope.displayCount >= $scope.total_bannerResult.data.length)
                         //{
                         //    $scope.displayCount = $scope.total_bannerResult.data.length;
                         //}
                         //for(var i=0;i<$scope.displayCount ;i++)
                         //{
                         //    $scope.bannerResult[i]=$scope.total_bannerResult.data[i];
                         //}
                     });
   
  
});
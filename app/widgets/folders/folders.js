
var folders = angular.module("w_folders",['ngAnimate']);
var foldersTemplate = "app/widgets/folders/template.html";

folders.directive('folders', function ()
{  

    return{
        restrict: 'E',
        templateUrl: foldersTemplate,
        replace: true,
        scope: {
            displayObject:"=",
            displayType:"@",
            displaySize:"@"
        },
        controller: 'foldersCtrl',
        link: function (scope, elm, attrs, ngmodel) {
            
        }
    };
});

folders.controller("foldersCtrl", function ($scope, $element, $attrs, ServerComm)
{
    //Get all folder   
   
    $scope.selectFolder = true;
    console.log("Folder Widget");
    $scope.folderResult = {};
    $scope.productlistResult = {};

    var url = "http://demo2110741.mockable.io/api/folders";
      ServerComm.getData("get", url).then(function (result)
        {
            $scope.folderResult = result;
            console.log("Get all Folder");
            console.log(result);
        });

    //Displaying folder details based on folder id
      $scope.openFolder = function (folderId)
      {
        debugger
          $scope.selectFolder = false;
          var url = "http://demo2110741.mockable.io/api/folders/" + folderId;
          ServerComm.getData("get", url).then(function (result)
            {
              $scope.productlistResult = result;
                console.log("Folder Details widget");
                console.log(result);
            });
      };
});


//Must Have CONFIG
var config = {
    name: "aSearch",
    type: "search",
    element:"advancedSearch",
    params:{
        searchType:"advanced"
    },
    url: "app/widgets/advancedSearch/template.html"
};

WIDGETS.createWidget(config);


//Core Functions
WIDGETS.aSearch.widget.controller("aSearchCtrl", function ($scope, $element, $attrs, ServerComm) {
    $scope.searchProducts = function ()
    {        
        console.log("Connecting to API...");
        $scope.url = "http://webservice.linknetwork.dk/api/en/search";
        $scope.sendData = {};
        $scope.ngModel = {};
        $scope.ngModel.loading = false;

        if ($scope.productName !== null || $scope.productName !== 0) {
            $scope.sendData.ProductName = $scope.productName;
        }
        if ($scope.categoryId !== null || $scope.categoryId !== 0) {
            $scope.sendData.CategoryId = $scope.categoryId;
        }
        //Advanced Search
        if ($scope.Quantity !== null || $scope.Quantity !== 0)        
            $scope.sendData.Quantity = $scope.Quantity;        

        if ($scope.PriceFrom !== null)
            $scope.sendData.PriceFrom = $scope.PriceFrom;
        else
            $scope.sendData.PriceFrom = "0";
        if ($scope.PriceTo !== null)
            $scope.sendData.PriceTo = $scope.PriceTo;
        else
            $scope.sendData.PriceTo = "100";
        if ($scope.DeliveryDate !== null || $scope.DeliveryDate !== 0)
        {
            $scope.sendData.DeliveryDate = $scope.DeliveryDate;
        }
        if ($scope.Color !== null)
        {
            $scope.sendData.Color = $scope.Color;
        }
        if ($scope.MinSize !== null || $scope.MinSize !== 0)
        {
            $scope.sendData.MinSize = $scope.MinSize;
        }
        if ($scope.MaxSize !== null)
        {
            $scope.sendData.MaxSize = $scope.MaxSize;
        }
        console.log($scope.sendData);
        debugger
        if ($scope.sendData.ProductName) {
            $scope.ngModel.loading = true;
            ServerComm.getData("post", $scope.url, $scope.sendData).
                    then(function (result)
                    {
                      
                        $scope.ngModel = result;
                        $scope.ngModel.loading = false;
                        console.log($scope.ngModel);
                    });
        }
        else
        {
            
            console.log("Product Name Required");
        }
    };
});
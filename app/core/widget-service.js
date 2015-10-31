/* 
 * Serive to handle WIDGETS
 */


var widget = angular.module("Widget_Module", ['serverComm']);

widget.factory("Widget", function (ServerComm) {
    return {
        widgets: {
            name: "Dummy Bane",
            type: "Search"
        },
        getWidgets: function () {
            var url = "http://webservice.linknetwork.dk/api/en/categories";
            ServerComm.getData("get", url).
                    then(function (result) {
                        console.log(result);
                    });
            ;
            console.log(this.widgets);
        }
    };
});


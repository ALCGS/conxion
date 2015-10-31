/* 
 * Search Widget Types Definitions
 */



//Register Types
TYPES.search = function (widgetname) {
    /* 
     * Advanced Search Widget
     */

    if (WIDGETS[widgetname] === undefined) {
        WIDGETS[widgetname] = {};
    }
    WIDGETS[widgetname].widget = {};
    WIDGETS[widgetname].widget = angular.module(WIDGETS[widgetname].config.name, ['serverComm']);
    var w_advancedSearchTemplate = WIDGETS[widgetname].config.url;
    var element = WIDGETS[widgetname].config.element;

    WIDGETS[widgetname].widget.directive(element, function () {
        return{
            restrict: 'E',
            templateUrl: w_advancedSearchTemplate,
            replace: true,
            scope: {
                productName: "=",
                searchResult: "=",
                ngModel: "="
            },
            controller: widgetname + 'Ctrl',
            link: function (scope, elm, attrs, ngmodel) {

            }
        };
    });
};
/* 
 * Base Widget Functions
 */

var WIDGETS = {};

/*-----------------------------------------
 Check and add Widgets
 -------------------------------------------*/

FW.registerWidget = function (widgetname, view) {
    for (view in VIEWS) {
        viewWidgets = VIEWS[view].widgets;
        for (i = 0; i < viewWidgets.length; i++) {
            WIDGETS[viewWidgets[i]] = {};
            WIDGETS[viewWidgets[i]].config = {};
        }
        console.log(WIDGETS);
    }

};

FW.registerWidget();

//Widget Factory
WIDGETS.createWidget = function (config) {
    WIDGETS[config.name].config = config;
    if (config.type === "search") {
        TYPES.search(config.name);
    }
    console.log(WIDGETS);
};

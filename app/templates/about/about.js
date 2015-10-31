var modAbout = angular.module('mainApp.about', []);

modAbout.controller('AboutController', [function () {
        about = this;
        about.name = "About Page";
        console.log("About");
    }]);

modAbout.directive('test', function () {
    return{
        restrict: 'E',
        template:'<h1> I am Working </h1>'
    };
});
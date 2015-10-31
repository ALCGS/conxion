


//Init the app Framework and create the application module

var FW = {};
var WIDGETS = {};
var TYPES = {};
var VIEWS = {};

var mainApp = angular.module('mainApp', [
    'serverComm', 'ngAnimate',
    'aSearch', 'w_productCard',
    'w_banner', 'Widget_Module',
    'ngMessages', 'w_folders',
    'oc.lazyLoad', 'ui.router',
    'ngMaterial', 'w_productDetails','w_shoppingCart',
    'mainApp.about'
]);

angular.module("mainApp").run(function ($rootScope, $state, $stateParams)
{
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

mainApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider)
    {

        $locationProvider.html5Mode(true).hashPrefix('!')

        $urlRouterProvider
                .otherwise('/404');

        $ocLazyLoadProvider.config({
            modules: [{
                name: 'TestModule',
                files: ['page-parts/about/about.js'],
            }]
        });

        /* States Configuration
        ---------------------------------------------- */

        $stateProvider
            .state("home", {
            url: "/",
            views: {
                "main": {
                    templateUrl: 'app/templates/home/home.html'
                },
                "sidebar": {
                    templateUrl: 'app/templates/home/sidebar.html'
                }
                ,
                "tab@sidebar": {
                    template: '<advanced-search></advanced-search>'
                }
            }
            })
            .state("home.search", {
                views: {
                    "tab": {
                        template: '<advanced-search ng-model="app.searchResult"></advanced-search>'
                    }
                }
            })
            .state("home.link", {
                views: {
                    "tab": {
                        template: 'LINKS'
                    }
                }
            })
            .state("home.folder", {
                views: {
                    "tab": {
                        template: '<folders></folders>'
                    }
                }
            })
            .state("home.cart", {
                views: {
                    "tab": {
                        template: '<shopping-cart></shopping-cart>'
                    }
                }
            })
            .state("404", {
            url: "/404",
            views: {
                'main': {
                    templateUrl: 'app/templates/404.html'
                }
            }

        });
    }]);



mainApp.controller('AppCtrl', ['$scope', 'Widget', function ($scope, Widget,$rootScope)
{
    var app = this;
    app.searchResult = {
        
    };
    Widget.getWidgets();
}]);

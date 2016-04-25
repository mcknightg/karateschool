/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */

//Main Controller
catwalkApp.controller('MainCtrl', ['$scope','$global.services',
    function ($scope,$services) {
        $scope.userName = 'Example user';
        $scope.helloText = 'Welcome in SeedProject';
        $scope.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
    }
]);


//  Home Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index.home', {
                url: "/home",
                templateUrl: "components/home/home.html",
                data: { pageTitle: 'Example view' }
            })
    }
]);

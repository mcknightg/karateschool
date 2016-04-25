catwalkApp.controller('DocsController', ['$scope','$global.services',
    function ($scope,$services) {
        console.log('Query Connection');
        $services.CatwalkConnection.query({},function(json){
            console.log(json);
        });
        $scope.userName = 'Example user';
        $scope.helloText = 'Welcome in SeedProject';
        $scope.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
    }
]);

//  Home Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index.docs', {
                url: "/docs",
                templateUrl: "components/docs/docs.html",
                data: { pageTitle: 'Example view' }
            })
    }
]);

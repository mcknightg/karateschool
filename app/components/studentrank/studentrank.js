'use strict';

//  Karateschool Studentrank Controller
catwalkApp.controller('KarateschoolStudentrankController', ['$scope','$location','$stateParams','$global.services', 'KarateschoolStudentrank',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "Studentrank";
        $scope.listParams = {row:20};

        $scope.get = function(id){
            $scope.modelData = service.get({id: id});
        };

        $scope.save = function(){
            service.save($scope.modelData,function(){
                  $scope.back();
            });
        };

        $scope.list = function(){
            $scope.modelList = service.query($scope.listParams);
        };

        $scope.remove = function(id){
            service.delete({id: id}, function () {

            });
        };

        $scope.new= function(){
            location.path('/catwalk/karateschool/studentrank/');
        };

        $scope.update= function(id){
            location.path('/karateschool/karateschool/studentrank/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Karateschool Studentrank Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('karateschool.studentrank', {
            url: "/karateschool/studentrank",
            templateUrl: "components/studentrank/studentrankTable.html",
            controller: 'KarateschoolStudentrankController'
        })
        .state('karateschool.studentrankForm', {
            url: "/karateschool/studentrank/:id",
            templateUrl: "components/studentrank/studentrankForm.html",
            controller: 'KarateschoolStudentrankController'
        })
     }
]);

'use strict';

//  UserManager ApplicationPersistentToken Controller
catwalkApp.controller('UserManagerApplicationPersistentTokenController', ['$scope','$location','$stateParams','$global.services', 'UserManagerApplicationPersistentToken',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "ApplicationPersistentToken";
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
            location.path('/catwalk/user_manager/applicationPersistentToken/');
        };

        $scope.update= function(id){
            location.path('/user_manager/user_manager/applicationPersistentToken/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  UserManager ApplicationPersistentToken Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationPersistentToken', {
            url: "/user_manager/applicationPersistentToken",
            templateUrl: "components/applicationPersistentToken/applicationPersistentTokenTable.html",
            controller: 'UserManagerApplicationPersistentTokenController'
        })
        .state('user_manager.applicationPersistentTokenForm', {
            url: "/user_manager/applicationPersistentToken/:id",
            templateUrl: "components/applicationPersistentToken/applicationPersistentTokenForm.html",
            controller: 'UserManagerApplicationPersistentTokenController'
        })
     }
]);

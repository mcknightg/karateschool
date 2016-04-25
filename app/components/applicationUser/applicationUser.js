'use strict';

//  UserManager ApplicationUser Controller
catwalkApp.controller('UserManagerApplicationUserController', ['$scope','$location','$stateParams','$global.services', 'UserManagerApplicationUser',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "ApplicationUser";
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
            location.path('/catwalk/user_manager/applicationUser/');
        };

        $scope.update= function(id){
            location.path('/user_manager/user_manager/applicationUser/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  UserManager ApplicationUser Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationUser', {
            url: "/user_manager/applicationUser",
            templateUrl: "components/applicationUser/applicationUserTable.html",
            controller: 'UserManagerApplicationUserController'
        })
        .state('user_manager.applicationUserForm', {
            url: "/user_manager/applicationUser/:id",
            templateUrl: "components/applicationUser/applicationUserForm.html",
            controller: 'UserManagerApplicationUserController'
        })
     }
]);

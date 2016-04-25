'use strict';

//  UserManager ApplicationUserAuthority Controller
catwalkApp.controller('UserManagerApplicationUserAuthorityController', ['$scope','$location','$stateParams','$global.services', 'UserManagerApplicationUserAuthority',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "ApplicationUserAuthority";
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
            location.path('/catwalk/user_manager/applicationUserAuthority/');
        };

        $scope.update= function(id){
            location.path('/user_manager/user_manager/applicationUserAuthority/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  UserManager ApplicationUserAuthority Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationUserAuthority', {
            url: "/user_manager/applicationUserAuthority",
            templateUrl: "components/applicationUserAuthority/applicationUserAuthorityTable.html",
            controller: 'UserManagerApplicationUserAuthorityController'
        })
        .state('user_manager.applicationUserAuthorityForm', {
            url: "/user_manager/applicationUserAuthority/:id",
            templateUrl: "components/applicationUserAuthority/applicationUserAuthorityForm.html",
            controller: 'UserManagerApplicationUserAuthorityController'
        })
     }
]);

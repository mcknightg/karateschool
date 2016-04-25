'use strict';

//  UserManager ApplicationAuthority Controller
catwalkApp.controller('UserManagerApplicationAuthorityController', ['$scope','$location','$stateParams','$global.services', 'UserManagerApplicationAuthority',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "ApplicationAuthority";
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
            location.path('/catwalk/user_manager/applicationAuthority/');
        };

        $scope.update= function(id){
            location.path('/user_manager/user_manager/applicationAuthority/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  UserManager ApplicationAuthority Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationAuthority', {
            url: "/user_manager/applicationAuthority",
            templateUrl: "components/applicationAuthority/applicationAuthorityTable.html",
            controller: 'UserManagerApplicationAuthorityController'
        })
        .state('user_manager.applicationAuthorityForm', {
            url: "/user_manager/applicationAuthority/:id",
            templateUrl: "components/applicationAuthority/applicationAuthorityForm.html",
            controller: 'UserManagerApplicationAuthorityController'
        })
     }
]);

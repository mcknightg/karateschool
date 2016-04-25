'use strict';

//  Karateschool Criteria Controller
catwalkApp.controller('KarateschoolCriteriaController', ['$scope','$location','$stateParams','$global.services', 'KarateschoolCriteria',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "Criteria";
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
            location.path('/catwalk/karateschool/criteria/');
        };

        $scope.update= function(id){
            location.path('/karateschool/karateschool/criteria/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Karateschool Criteria Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('karateschool.criteria', {
            url: "/karateschool/criteria",
            templateUrl: "components/criteria/criteriaTable.html",
            controller: 'KarateschoolCriteriaController'
        })
        .state('karateschool.criteriaForm', {
            url: "/karateschool/criteria/:id",
            templateUrl: "components/criteria/criteriaForm.html",
            controller: 'KarateschoolCriteriaController'
        })
     }
]);

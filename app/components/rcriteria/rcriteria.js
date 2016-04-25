'use strict';

//  Karateschool Rcriteria Controller
catwalkApp.controller('KarateschoolRcriteriaController', ['$scope','$location','$stateParams','$global.services', 'KarateschoolRcriteria',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "Rcriteria";
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
            location.path('/catwalk/karateschool/rcriteria/');
        };

        $scope.update= function(id){
            location.path('/karateschool/karateschool/rcriteria/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Karateschool Rcriteria Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('karateschool.rcriteria', {
            url: "/karateschool/rcriteria",
            templateUrl: "components/rcriteria/rcriteriaTable.html",
            controller: 'KarateschoolRcriteriaController'
        })
        .state('karateschool.rcriteriaForm', {
            url: "/karateschool/rcriteria/:id",
            templateUrl: "components/rcriteria/rcriteriaForm.html",
            controller: 'KarateschoolRcriteriaController'
        })
     }
]);

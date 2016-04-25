'use strict';

//  Karateschool Rank Controller
catwalkApp.controller('KarateschoolRankController', ['$scope','$location','$stateParams','$global.services', 'KarateschoolRank',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "Rank";
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
            location.path('/catwalk/karateschool/rank/');
        };

        $scope.update= function(id){
            location.path('/karateschool/karateschool/rank/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Karateschool Rank Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('karateschool.rank', {
            url: "/karateschool/rank",
            templateUrl: "components/rank/rankTable.html",
            controller: 'KarateschoolRankController'
        })
        .state('karateschool.rankForm', {
            url: "/karateschool/rank/:id",
            templateUrl: "components/rank/rankForm.html",
            controller: 'KarateschoolRankController'
        })
     }
]);

'use strict';

//  Karateschool School Controller
catwalkApp.controller('KarateschoolSchoolController', ['$scope','$location','$stateParams','$global.services', 'KarateschoolSchool',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "School";
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
            location.path('/catwalk/karateschool/school/');
        };

        $scope.update= function(id){
            location.path('/karateschool/karateschool/school/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Karateschool School Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('karateschool.school', {
            url: "/karateschool/school",
            templateUrl: "components/school/schoolTable.html",
            controller: 'KarateschoolSchoolController'
        })
        .state('karateschool.schoolForm', {
            url: "/karateschool/school/:id",
            templateUrl: "components/school/schoolForm.html",
            controller: 'KarateschoolSchoolController'
        })
     }
]);

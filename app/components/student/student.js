'use strict';

//  Karateschool Student Controller
catwalkApp.controller('KarateschoolStudentController', ['$scope','$location','$stateParams','$global.services', 'KarateschoolStudent',
    function ($scope,location,$stateParams,$services, service) {
        $scope.name = "Student";
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
            location.path('/catwalk/karateschool/student/');
        };

        $scope.update= function(id){
            location.path('/karateschool/karateschool/student/' + id);
        };

        $scope.back = function () {
            window.history.back();
        };

        if($stateParams.id){ $scope.get($stateParams.id);}
        else{ $scope.list();}
    }
]);

//  Karateschool Student Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('karateschool.student', {
            url: "/karateschool/student",
            templateUrl: "components/student/studentTable.html",
            controller: 'KarateschoolStudentController'
        })
        .state('karateschool.studentForm', {
            url: "/karateschool/student/:id",
            templateUrl: "components/student/studentForm.html",
            controller: 'KarateschoolStudentController'
        })
     }
]);



catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager', {
            abstract: false,
            url: "/user_manager",
            templateUrl: "components/layout/user_manager_layout.html"
        })

     }
]);

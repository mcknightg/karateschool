

catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('karateschool', {
            abstract: false,
            url: "/karateschool",
            templateUrl: "components/layout/karateschool_layout.html"
        })

     }
]);

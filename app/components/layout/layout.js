/**
 *   Routing
 */
catwalkApp.config(['$stateProvider', '$urlRouterProvider','USER_ROLES',
    function ($stateProvider, $urlRouterProvider,USER_ROLES) {
        $urlRouterProvider.otherwise("/index/home");
        $stateProvider
            .state('index', {
                abstract: true,
                url: "/index",
                templateUrl: "components/layout/layout.html"
            });
    }
]).run(securityHandler);

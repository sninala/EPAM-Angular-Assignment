(function () {
    var app = angular.module('catsApp', ['ui.router', 'ngCookies']);
    app.config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "./assets/templates/catsList.template.html"
            }).state("addNewCat", {
                url: "/addNewCat",
                templateUrl: "./assets/templates/addNewCat.template.html"
            });
    });

}());
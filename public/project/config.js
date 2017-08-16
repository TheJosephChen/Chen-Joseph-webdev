(function () {
    angular
        .module("duelystApp")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

        $routeProvider
            .when("/", {
                templateUrl: "home.html",
                controller: "userSearchController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/user/templates/login.view.html",
                controller: "loginController",
                controllerAs: "model"})
            .when("/profile/:userId", {
                templateUrl: "views/user/templates/profile.view.html",
                controller: "profileController",
                controllerAs: "model"})
            .when("/register", {
                templateUrl: "views/user/templates/register.view.html",
                controller: "registerController",
                controllerAs: "model"})
            .when("/search", {
                templateUrl: "views/search/templates/search.html",
                controller: "cardSearchController",
                controllerAs: "model"
            })
            .when("/details/:cardName", {
                templateUrl: "views/search/templates/card-details.html",
                controller: "cardDetailsController",
                controllerAs: "model"
            })
            .when("/deck", {
                templateUrl: "views/search/templates/deck.html",
                controller: "deckSearchController",
                controllerAs: "model"
            })
            .when("/tournament/", {
                templateUrl: "views/tournament/tournament-list.html"
            })
            .when("/tournament/create", {
                templateUrl: "views/tournament/tournament-create.html"
            })


    }
})();
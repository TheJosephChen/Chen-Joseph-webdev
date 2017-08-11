(function () {
    angular
        .module("duelystApp")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

        $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
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


    }
})();
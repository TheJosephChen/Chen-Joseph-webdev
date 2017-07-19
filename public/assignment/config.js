(function () {
    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "templates/login.view.client.html"})
            .when("/register", {
                templateUrl: "templates/register.view.client.html"})
            .when("/profile/:userId", {
                templateUrl: "templates/profile.view.client.html"});
    }
})();
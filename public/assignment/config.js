(function () {
    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"})
            .when("/register", {
                templateUrl: "templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"})
            .when("/profile/:userId", {
                templateUrl: "templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"})
    }
})();
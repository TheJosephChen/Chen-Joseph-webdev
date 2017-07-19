var app = angular.module("WamApp", ["ngRoute"]);

app.controller("loginController", loginController);

app.config(configuration);

function configuration($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "login.html"})
        .when("/register", {
            templateUrl: "register.html"})
        .when("/profile", {
            templateUrl: "profile.html"});
}

function loginController($scope) {

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ]


    $scope.login = function (user) {
        for (var u in users) {
            var _user = users[u];
            if (user.username === _user.username && user.password === _user.password) {
                $scope.welcomeUser = _user;
            }
        }
    }
}
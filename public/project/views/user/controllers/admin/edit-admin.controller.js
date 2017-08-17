(function () {
    angular
        .module("duelystApp")
        .controller("editAdminController", editAdminController);

    function editAdminController($routeParams, userService) {
        var model = this;

        model.username = $routeParams["username"];

        function init() {
            checkLogin();
            userService
                .findUserByUsername(model.username)
                .then(function (user) {
                    model.user = user;
                })
        };
        init();

        function checkLogin() {
            userService
                .checkLogin()
                .then(function (user) {
                    if (user === "0") {
                        model.loggedInUser = null;
                    } else {
                        model.loggedInUser = user;
                    }
                })
        }
    }
})();
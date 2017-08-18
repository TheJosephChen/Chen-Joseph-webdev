(function () {
    angular
        .module("duelystApp")
        .controller("editAdminController", editAdminController);

    function editAdminController($routeParams, userService) {
        var model = this;

        model.username = $routeParams["username"];
        model.roles = ["ORGANIZER", "PARTICIPANT", "ADMIN"];
        model.updateIGN = updateIGN;

        function init() {
            checkLogin();
            userService
                .findUserByUsername(model.username)
                .then(function (user) {
                    model.user = angular.copy(user);
                    model.origUser = angular.copy(model.user);
                    model.userRoles = model.user.roles;

                })
        };
        init();

        function updateIGN(user) {
            userService.updateUser(user._id, user);
            angular.copy(model.user, model.origUser);
        };

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
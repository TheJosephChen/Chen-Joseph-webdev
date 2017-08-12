(function () {
    angular
        .module("duelystApp")
        .controller("registerController", registerController);


    function registerController($location, userService, $rootScope) {
        var model = this;

        model.registerUser = registerUser;
        function init() {

        }
        init();

        function registerUser(user) {
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if (_user === "0" || _user === null) {
                        return userService.registerUser(user)
                    } else {
                        model.error = "User Already exists";
                    }
                })
                .then(function (response) {
                    var _user = response.data;
                    $rootScope.currentUser = _user;
                    $location.url("/");
                });
        }
    }
})();
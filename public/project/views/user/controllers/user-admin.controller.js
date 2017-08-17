(function () {
    angular
        .module("duelystApp")
        .controller("userAdminController", userAdminController);

    function userAdminController(userService) {
        var model = this;


        function init() {
            checkLogin();
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
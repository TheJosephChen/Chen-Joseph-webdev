(function () {
    angular
        .module("WamApp")
        .controller("registerController", registerController);


    function registerController($location, userService) {
        var model = this;

        model.registerUser = registerUser;
        function init() {

        }
        init();

        function registerUser(user) {
            var user = userService.registerUser(user);
            $location.url("/profile/" + user._id);
        }

    }
})();
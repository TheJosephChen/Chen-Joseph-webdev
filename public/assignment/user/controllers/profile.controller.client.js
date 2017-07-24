(function () {
    angular
        .module("WamApp")
        .controller("profileController", profileController);

    function profileController($routeParams, $location, userService) {
        var model = this;
        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.unregisterUser = unregisterUser;

        function init() {
            model.user = userService.findUserByID(userId);

        };
        init();

        function updateUser(user) {
            userService.updateUser(user._id, user);
        };

        function unregisterUser(userId) {
            userService.deleteUser(userId);
            $location.url("/login");
        };
    }
})();
(function () {
    angular
        .module("WamApp")
        .controller("profileController", profileController);

    function profileController($routeParams, userService) {
        var model = this;
        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.unregisterUser = unregisterUser;

        function init() {
            model.user = userService.findUserByID(userId);

        };
        init();

        function updateUser() {

        };

        function unregisterUser() {

        };
    }
})();
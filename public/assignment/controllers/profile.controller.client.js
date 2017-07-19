(function () {
    angular
        .module("WamApp")
        .controller("profileController", profileController);

    function profileController($scope, $routeParams, userService) {
        var userId = $routeParams["userId"];

        $scope.updateUser = updateUser;
        $scope.unregisterUser = unregisterUser;

        function init() {
            $scope.user = userService.findUserByID(userId);

        };
        init();

        function updateUser() {

        };

        function unregisterUser() {

        };
    }
})();
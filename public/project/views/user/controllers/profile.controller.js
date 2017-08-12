(function () {
    angular
        .module("duelystApp")
        .controller("profileController", profileController);

    function profileController($routeParams, $location, userService) {
        var model = this;
        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.unregisterUser = unregisterUser;
        model.rateUser = rateUser;

        function init() {
            userService.findUserByID(userId)
                .then(function (response) {
                    model.user = angular.copy(response.data);
                    model.origUser = angular.copy(model.user);
                
            });
        };
        init();

        function updateUser(user) {
            userService.updateUser(user._id, user);
            angular.copy(model.user, model.origUser);
        };

        function unregisterUser(userId) {
            userService.deleteUser(userId);
            $location.url("/login");
        };

        function rateUser(ratingUser, ratedUser, rating) {
            model.ratingMessage = rating;
            var ratingMessage = ratingUser.username + " has given a rating of " + rating + " to " + ratedUser.username;
            userService.rateUser(ratingUser._id, ratingMessage);
            var ratedMessage = ratedUser.username + " has received a rating of " + rating + " from " + ratingUser.username;
            userService.rateUser(ratedUser._id, ratedMessage);
        }
    }
})();
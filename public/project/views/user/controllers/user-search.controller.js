(function () {
    angular
        .module("duelystApp")
        .controller("userSearchController", userSearchController);


    function userSearchController($location, userService) {
        var model = this;

        model.userName = "";
        model.findUserByName = findUserByName;


        function init() {

        };

        init();

        function findUserByName(username) {
            userService.findUserByUsername(username)
                .then(function (response) {
                    user = response.data;
                    if (user === "0" || user === null) {
                        model.errorMessage = "User not found";
                    } else {
                        $location.url("/profile/" + user._id);
                    }

                })
        }
    }
})();
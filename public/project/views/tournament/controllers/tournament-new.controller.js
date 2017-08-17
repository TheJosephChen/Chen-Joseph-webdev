(function () {
    angular
        .module("duelystApp")
        .controller("tournamentNewController", tournamentNewController);

    function tournamentNewController($routeParams, tournamentService, $location, userService, getLoggedInUser) {
        var model = this;
        model.loggedInUser = getLoggedInUser;

        model.createTournament = createTournament;
        function init() {
        }
        init();

        function createTournament(user, tournament) {
            tournamentService
                .createTournament(user._id, tournament)
                .then(function () {
                    if (!isUserOrganizerRole(user)) {
                        console.log(user);
                        user.roles.push("ORGANIZER");
                        userService
                            .updateUser(user._id, user)
                        console.log(user);
                    }

                    $location.url("/tournament/");
                })
        }

        function isUserOrganizerRole(user) {
            var roles = user.roles;
            return (roles.indexOf("ORGANIZER") !== -1);
        }

    }

})();
(function () {
    angular
        .module("duelystApp")
        .controller("tournamentManageController", tournamentManageController);

    function tournamentManageController($routeParams, tournamentService, getLoggedInUser) {
        var model = this;
        model.tournaments = [];
        model.loggedInUser = getLoggedInUser;
        var userId = $routeParams.userId;

        function init() {
            tournamentService
                .getAllTournamentsForOrganizer(userId)
                .then(function (tournaments) {
                    model.tournaments = tournaments;
                })
        }
        init();

    }

})();
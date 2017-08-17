(function () {
    angular
        .module("duelystApp")
        .controller("tournamentListController", tournamentListController);

    function tournamentListController($routeParams, tournamentService, getLoggedInUser) {
        var model = this;
        model.tournaments = [];
        model.loggedInUser = getLoggedInUser

        function init() {
            tournamentService
                .getAllTournaments()
                .then(function (tournaments) {
                    model.tournaments = tournaments;
                })
        }
        init();

    }

})();
(function () {
    angular
        .module("duelystApp")
        .controller("tournamentInfoController", tournamentInfoController);

    function tournamentInfoController($routeParams, tournamentService, getLoggedInUser) {
        var model = this;
        model.tournament = {};
        model.loggedInUser = getLoggedInUser
        var tournamentId = $routeParams["tournamentId"];

        function init() {
            tournamentService
                .getTournamentById(tournamentId)
                .then(function (tournament) {
                    model.tournament = tournament;
                    model.tournament.participants = [{_id: 22, username: "a", deck: "b"},{_id: 23, username: "c", deck: "d"}]
                })
        }
        init();

    }

})();
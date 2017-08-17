(function () {
    angular
        .module("duelystApp")
        .controller("tournamentInfoController", tournamentInfoController);

    function tournamentInfoController(tournamentService, getLoggedInUser) {
        var model = this;
        model.tournament = {};
        model.loggedInUser = getLoggedInUser

        function init() {
            model.tournament = {id: 00000, name: "testTournament", max: 8, participants: []};
        }
        init();

    }

})();
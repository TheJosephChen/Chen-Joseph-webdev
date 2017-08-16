(function () {
    angular
        .module("duelystApp")
        .controller("tournamentNewController", tournamentNewController);

    function tournamentNewController($routeParams, tournamentService, $location) {
        var model = this;

        model.createTournament = createTournament;
        function init() {
        }
        init();

        function createTournament(user, tournament) {
            tournamentService
                .createTournament(user._id, tournament)
                .then(function () {
                    $location.url("/tournament/");
                })
        }

    }

})();
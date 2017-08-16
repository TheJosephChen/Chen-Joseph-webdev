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

        function createTournament(user) {
            var _tournament = {name: "hello", organizer: user._id};
            tournamentService
                .createTournament(user._id, _tournament)
                .then(function () {
                    $location.url("/tournament/");
                })
        }

    }

})();
(function () {
    angular
        .module("duelystApp")
        .controller("tournamentListController", tournamentListController);

    function tournamentListController($routeParams, tournamentService) {
        var model = this;
        model.tournaments = [];

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
(function () {
    angular
        .module("duelystApp")
        .controller("tournamentManageController", tournamentManageController);

    function tournamentManageController($routeParams, tournamentService) {
        var model = this;
        model.tournaments = [];
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
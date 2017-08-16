(function () {
    angular
        .module("duelystApp")
        .service("tournamentService", tournamentService);

    function tournamentService($http) {
        this.createTournament = createTournament;

        function createTournament(userId, tournament) {
            var url = "/api/tournament/user/" + userId;
            return $http.post(url, tournament);
        }
    }

})();
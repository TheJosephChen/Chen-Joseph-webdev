(function () {
    angular
        .module("duelystApp")
        .service("tournamentService", tournamentService);

    function tournamentService($http) {
        this.createTournament = createTournament;
        this.getAllTournaments = getAllTournaments;

        function createTournament(userId, tournament) {
            var url = "/api/tournament/user/" + userId;
            return $http.post(url, tournament);
        }

        function getAllTournaments() {
            var url = "/api/tournament";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }

})();
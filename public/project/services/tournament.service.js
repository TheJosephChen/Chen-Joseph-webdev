(function () {
    angular
        .module("duelystApp")
        .service("tournamentService", tournamentService);

    function tournamentService($http) {
        this.createTournament = createTournament;
        this.getAllTournaments = getAllTournaments;
        this.getAllTournamentsForOrganizer = getAllTournamentsForOrganizer;

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

        function getAllTournamentsForOrganizer(userId) {
            var url = "/api/tournament/" + userId + "/manage";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }
    }

})();
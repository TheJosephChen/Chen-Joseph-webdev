(function () {
    angular
        .module("duelystApp")
        .service("tournamentService", tournamentService);

    function tournamentService($http) {
        this.createTournament = createTournament;
        this.getAllTournaments = getAllTournaments;
        this.getAllTournamentsForOrganizer = getAllTournamentsForOrganizer;

        function createTournament(username, tournament) {
            var url = "/api/tournament/user/" + username;
            return $http.post(url, tournament);
        }

        function getAllTournaments() {
            var url = "/api/tournament";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function getAllTournamentsForOrganizer(username) {
            var url = "/api/tournament/" + username + "/manage";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }
    }

})();
var app = require("../../express");
var tournamentModel = require("../models/tournament/tournament.model.server");

app.post("/api/tournament/user/:username", createTournament);
app.get("/api/tournament", getAllTournaments)
app.get("/api/tournament/:username/manage", getAllTournamentsForOrganizer)
app.get("/api/tournament/:tournamentId", getTournamentById)

function createTournament(req, response) {
    var username = req.params.username;
    var tournament = req.body;
    tournamentModel
        .createTournament(username, tournament)
        .then(function (tournament) {
            response.json(tournament);
        })

}

function getAllTournaments(req, response) {

    tournamentModel
        .findAllTournaments()
        .then(function (tournaments) {
            response.json(tournaments);
        })
}

function getAllTournamentsForOrganizer(req, response) {
    var username = req.params.username;
    tournamentModel
        .findAllTournamentsForOrganizer(username)
        .then(function (tournaments) {
            response.json(tournaments);
        })
}

function getTournamentById(req, response) {
    var tournamentId = req.params.tournamentId;
    tournamentModel
        .findTournamentById(tournamentId)
        .then(function (tournaments) {
            response.json(tournaments);
        })
}
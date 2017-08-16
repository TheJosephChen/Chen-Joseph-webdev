var mongoose = require("mongoose");
var tournamentSchema = require("./tournament.schema.server");
var tournamentModel = mongoose.model("TournamentModel", tournamentSchema);

tournamentModel.createTournament = createTournament;
tournamentModel.findAllTournaments = findAllTournaments;
tournamentModel.findAllTournamentsForOrganizer = findAllTournamentsForOrganizer;

module.exports = tournamentModel;

function createTournament(userId, tournament) {
    tournament.organizer = userId;
    return tournamentModel.create(tournament);
}

function findAllTournaments() {
    return tournamentModel.find();
}

function findAllTournamentsForOrganizer(userId) {
    return tournamentModel.find({organizer: userId});
}
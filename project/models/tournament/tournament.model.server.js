var mongoose = require("mongoose");
var tournamentSchema = require("./tournament.schema.server");
var tournamentModel = mongoose.model("TournamentModel", tournamentSchema);
module.exports = tournamentModel;

tournamentModel.createTournament = createTournament;
tournamentModel.findAllTournaments = findAllTournaments;

function createTournament(tournament) {
    return tournamentModel.create(tournament);
}

function findAllTournaments() {
    return tournamentModel.find();
}
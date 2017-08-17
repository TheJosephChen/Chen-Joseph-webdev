(function () {
    angular
        .module("duelystApp")
        .controller("tournamentJoinController", tournamentJoinController);


    function tournamentJoinController(deckService, userService) {
        var model = this;

        model.deck = [];
        model.getDeckByCode = getDeckByCode;


        function init() {
            checkLogin();
        }
        init();

        function getDeckByCode(deckCode) {
            deckService
                .getDeckByCode(deckCode)
                .then(renderDeck)
                .then(function () {
                    model.validDeck = true;
                });
        }

        function renderDeck(deck) {
            deck.cards.splice(0, 0, getDeckGeneral(deck));
            model.deck = deck.cards;

        }

        function getDeckGeneral(deck) {
            var generalCard = {"name": deck.general, "count": 1};
            return generalCard;

        }

        function checkLogin() {
            userService
                .checkLogin()
                .then(function (user) {
                    if (user === "0") {
                        model.loggedInUser = null;
                    } else {
                        model.loggedInUser = user;
                    }
                })
        }
    }
})();
(function () {
    angular
        .module("duelystApp")
        .controller("deckSearchController", deckSearchController);


    function deckSearchController(deckService) {
        var model = this;

        model.deck = [];
        model.getDeckByCode = getDeckByCode;


        function init() {

        }
        init();

        function getDeckByCode(deckCode) {
            deckService
                .getDeckByCode(deckCode)
                .then(renderDeck);
        }

        function renderDeck(deck) {
            deck.cards.splice(0, 0, getDeckGeneral(deck));
            model.deck = deck.cards;

        }

        function getDeckGeneral(deck) {
            var generalCard = {"name": deck.general, "count": 1};
            return generalCard;

        }

    }
})();
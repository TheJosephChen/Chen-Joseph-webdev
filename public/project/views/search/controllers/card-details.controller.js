(function () {
    angular
        .module("duelystApp")
        .controller("cardDetailsController", cardDetailsController);

    function cardDetailsController($routeParams, cardService) {
        var model = this;

        model.cardName = $routeParams.cardName;


        function init() {
            cardService
                .getCardByName(model.cardName)
                .then(renderCard);
        }
        init();

        function renderCard(card) {
            model.card = card;

        }

    }

})();
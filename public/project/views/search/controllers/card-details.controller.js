(function () {
    angular
        .module("duelystApp")
        .controller("cardDetailsController", cardDetailsController);

    function cardDetailsController($routeParams, cardService) {
        var model = this;

        model.cardName = $routeParams.cardName;

        model.createComment = createComment;

        function init() {
            cardService
                .getCardByName(model.cardName)
                .then(getCommentsByCardName)
                .then(renderCard);
        }
        init();

        function renderCard(card) {
            model.card = card;

        }

        function createComment(user, comment) {

        }

        function getCommentsByCardName(card) {
            var cardName = card.split(",")[0];
            var _card = cardService
                .getCommentsByCardName(cardName);
            return _card;
        }

    }

})();
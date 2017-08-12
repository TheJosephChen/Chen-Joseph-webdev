(function () {
    angular
        .module("duelystApp")
        .controller("cardDetailsController", cardDetailsController);

    function cardDetailsController($routeParams, cardService) {
        var model = this;

        model.cardName = $routeParams.cardName;
        model.comments = "something went wrong";

        model.createComment = createComment;

        function init() {
            cardService
                .getCardByCardName(model.cardName)
                .then(getCardComments)
                .then(renderCard);
        }
        init();

        function renderCard(card) {
            model.card = card;
            return card;
        }

        function getCardComments(card) {
            var cardName = card.split(",")[0];
            cardService
                .findCardByName(cardName)
                .then(function (response) {
                    var comments = response.data;
                    if (comments !== null) {
                        model.comments = comments;
                    } else {
                        cardService
                            .createCard({name: cardName})
                            .then(function (response) {
                                model.comments = response.data;
                            })
                    }
                })
            return card;
        }

        function createComment(user, comment) {

        }

    }

})();
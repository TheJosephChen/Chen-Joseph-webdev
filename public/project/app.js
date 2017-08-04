(function () {
    angular
        .module("duelystApp", [])
        .controller("SearchController", SearchController)
        .service("cardService", cardService);

    function SearchController(cardService) {
        var model = this;

        model.searchCardByName = searchCardByName;

        function init() {

        }
        init();

        function searchCardByName(cardName) {
            cardService
                .searchCardByName(cardName)
                .then(renderCards);

        }

        function renderCards(cards) {
            model.cards = cards;
        }
    }

    function cardService($http) {
        this.searchCardByName = searchCardByName;

        function searchCardByName(cardName) {
            var url = "https://duelyststats.info/scripts/carddata/get.php?cardName=" + cardName;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }
    }
})();
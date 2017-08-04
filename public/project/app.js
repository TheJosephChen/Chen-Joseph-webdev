(function () {
    angular
        .module("duelystApp", ["ngRoute"])
        .config(configuration)
        .controller("searchController", searchController)
        .controller("detailsController", detailsController)
        .controller("deckController", deckController)
        .service("cardService", cardService)
        .service("deckService", deckService);


    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/search", {
                templateUrl: "search.html",
                controller: searchController,
                controllerAs: "model"
            })
            .when("/details/:cardName", {
                templateUrl: "details.html",
                controller: detailsController,
                controllerAs: "model"
            })
            .when("/deck", {
                templateUrl: "deck.html",
                controller: deckController,
                controllerAs: "model"
            })
    }

    function deckController(deckService) {
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

    function detailsController($routeParams, cardService) {
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

    function searchController(cardService, $location) {
        var model = this;
        var _cards = [];

        model.searchCardByName = searchCardByName;
        model.navToDeck = navToDeck;

        function init() {

        }
        init();

        function navToDeck() {
            $location.url("/deck");
        }

        function getCardByName(cardName) {
            cardService
                .getCardByName(cardName)
                .then(clearSearch);
        }

        function searchCardByName(cardName) {
            cardService
                .searchCardByName(cardName)
                .then(parseCardResponse)
                .then(clearSearch);
        }

        function clearSearch() {
            _cards = [];
        }

        function parseCardResponse(cards) {
            var parse = cards.split(": ");
            var responseQuantifier = parse[0];
            if (responseQuantifier === "No cards found for query") {
                // no cards were returned in the response
                parseNoCards();
            } else if (responseQuantifier === "Multiple found") {
                // many cards were found in the response
                parseMultipleCards(parse[1]);
            } else {
                // one card was found in the response
                parseOneCard(cards);
            }
        }

        function parseNoCards() {
            // No cards found for query: (Name)
            _cards.push({"value": "no cards"});
            model.cards = _cards;
        }

        function parseMultipleCards(cards) {
            // Multiple found: Item | Item | Item | Item | Item | Item | Item | Item | Item | Item{TOO MANY RESULTS, REFINE SEARCH}
            var parse = cards.split("| ");
            if (parse.length === 10) {
                var overflowFilter = parse[9].split("{");
                if (overflowFilter.length > 1) {
                    parse[9] = overflowFilter[0];
                }
            }
            for (var c in parse) {
                _cards.push({"value": parse[c]});
            }
            model.cards = _cards;
        }

        function parseOneCard(card) {
            // Name, cost, faction, type[, stats][: Text]
            var parse = card.split(", ");
            var cardName = parse[0];
            _cards.push({"value": cardName});
            model.cards = _cards;
        }
    }

    function cardService($http) {
        this.searchCardByName = searchCardByName;
        this.getCardByName = getCardByName;

        function searchCardByName(cardName) {
            var url = "https://duelyststats.info/scripts/carddata/get.php?cardName=" + cardName;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        // function only used to get detailed card information
        // assumes card name is unique (already parsed in search list)
        function getCardByName(cardName) {
            var url = "https://duelyststats.info/scripts/carddata/get.php?cardName=" + cardName;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }
    }

    function deckService($http) {
        this.getDeckByCode = getDeckByCode;

        function getDeckByCode(deckCode) {
            // example code: "MTo0MTgsMzo0MDUsMzo0MTIsMzo0MTcsMzoxMDAyMCwzOjEwOTgxLDM6MTEwODYsMzoxOTA1MiwzOjIwMTEyLDM6MjAxMTYsMzoyMDEyMiwzOjIwMTI1LDM6MjAyMjUsMzoyMDIzNA=="
            var url = "http://decklyst.xyz/deck/" + deckCode;

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })

        }
    }
})();
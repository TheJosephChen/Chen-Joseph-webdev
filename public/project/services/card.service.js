(function () {
    angular
        .module("duelystApp")
        .service("cardService", cardService);

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

})();
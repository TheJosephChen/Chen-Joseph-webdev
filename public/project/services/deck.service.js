(function () {
    angular
        .module("duelystApp")
        .service("deckService", deckService);

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
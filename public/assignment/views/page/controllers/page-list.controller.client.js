(function () {
    angular
        .module("WamApp")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        function init() {
            pageService
                .findPagesByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                })
        }
        init();
    }
})();
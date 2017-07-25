(function () {
    angular
        .module("WamApp")
        .controller("newPageController", newPageController);

    function newPageController($routeParams, pageService, $location) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.createPage = createPage;

        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteId);
        }
        init();

        function createPage(websiteId, page) {
            pageService.createPage(websiteId, page);
            $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
        }
    }
})();
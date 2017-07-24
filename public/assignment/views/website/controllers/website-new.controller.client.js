(function () {
    angular
        .module("WamApp")
        .controller("newWebsiteController", newWebsiteController);

    function newWebsiteController($routeParams, $location, websiteService) {
        var model = this;
        model.createWebsite = createWebsite;

        model.userId = $routeParams.userId;
        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }
        init();

        function createWebsite(userId, website) {
            websiteService.createWebsite(userId, website);
            $location.url("/user/" + model.userId + "/website");
        }
    }
})();
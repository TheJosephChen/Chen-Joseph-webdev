(function () {
    angular
        .module("WamApp")
        .controller("editPageController", editPageController);

    function editPageController($routeParams, pageService, $location) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId = $routeParams.pageId;
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        function init() {
            model.pages = angular.copy(pageService.findPagesByWebsiteId(model.websiteId));
            model.page = angular.copy(pageService.findPageById(model.pageId));
            model.origPage = angular.copy(model.page);
            model.origPages = angular.copy(model.pages);
        }
        init();

        function updatePage(page) {
            pageService.updatePage(page._id, page);
            angular.copy(model.page, model.origPage);
            angular.copy(model.pages, model.origPages);
            $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
        }

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
        }
    }
})();
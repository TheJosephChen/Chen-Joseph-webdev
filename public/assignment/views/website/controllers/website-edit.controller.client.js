(function () {
    angular
        .module("WamApp")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($routeParams, $location, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;
        model.cancelEdit = cancelEdit;

        function init() {
            model.websites = angular.copy(websiteService.findWebsitesByUser(model.userId));
            model.website = angular.copy(websiteService.findWebsiteById(model.websiteId));
            model.origWebsite = angular.copy(model.website);
            model.origWebsites = angular.copy(model.websites)
        }
        init();

        function updateWebsite(website) {
            websiteService.updateWebsite(website._id, website);
            angular.copy(model.website, model.origWebsite);
            angular.copy(model.websites, model.origWebsites);
            $location.url("/user/" + model.userId + "/website");
        }

        function deleteWebsite(websiteId) {
            websiteService.deleteWebsite(websiteId);
            $location.url("/user/" + model.userId + "/website");
        }

        function cancelEdit() {
            model.website = angular.copy(model.origWebsite);
            model.websites = angular.copy(model.origWebsites);
            $location.url("/user/" + model.userId + "/website");
        }
    }
})();
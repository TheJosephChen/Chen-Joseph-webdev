(function () {
    angular
        .module("WamApp")
        .controller("widgetListController", widgetListController);

    function widgetListController($routeParams, widgetService, $sce) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId = $routeParams.pageId;
        model.trustThisHTMLContent = trustThisHTMLContent;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.pageId);
        }
        init();

        function trustThisHTMLContent(html) {
            return $sce.trustAsHtml(html);
        }

        function getYouTubeEmbedUrl(youtubeLink) {
            var embedUrl = 'https://www.youtube.com/embed/';
            var linkParts = youtubeLink.split('/');
            var id = linkParts[linkParts.length - 1];
            embedUrl += id;
            return $sce.trustAsResourceUrl(embedUrl);
        }

    }
})();
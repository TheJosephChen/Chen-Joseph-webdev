(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService);

    function pageService() {

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        this.createPage = createPage;
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        function createPage(websiteId, page) {
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            pages.push(page);
            return page;
        }

        function findPageByWebsiteId(websiteId) {
            for (var p in pages) {
                var page = pages[p];
                if (page.websiteId === websiteId) {
                    return page;
                }
            }
            return null;
        }

        function findPageById(pageId) {
            for (var p in pages) {
                var page = pages[p];
                if (page._id === pageId) {
                    return page;
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages[p] = page;
                    return page;
                }
            }
            return null;
        }

        function deletePage(pageId) {
            var pageIndex;
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pageIndex = p;
                    pages.splice(pageIndex, 1);
                    return pageId;
                }
            }
            return null;
        }

    }
})();
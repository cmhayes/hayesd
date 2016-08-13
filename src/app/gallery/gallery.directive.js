(function() {
    'use strict';

    var galleryDir = function() {
        return {
            bindToController: true,
            controller: 'GalleryCtrl',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/gallery/gallery.html'
        };
    };

    angular.module('hayesd').directive('hayesdGallery', galleryDir);
})();

(function() {
    'use strict';

    var IMG_URL = '//s3.amazonaws.com/finallyhayesd.us/assets/images/';

    // Include parameters, $inject below
    var GalleryCtrl = function() {
        var vm = this;
        var gallery = new Array(16);

        // Duplicate images placed at the end for smooth animation.
        var dupes = [];
        _.forEach(gallery, function(image, i) {
            var picNum = i + 1;
            if (picNum <=6) {
                dupes.push(IMG_URL + picNum + '.jpg');
            }

            gallery[i] = IMG_URL + picNum + '.jpg';
        });

        gallery.push(dupes);
        vm.gallery = _.flatten(gallery);
    };

    angular.module('hayesd').controller('GalleryCtrl', GalleryCtrl);
})();

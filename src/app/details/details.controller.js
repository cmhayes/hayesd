(function() {
    'use strict';

    // Include parameters, $inject below
    var DetailsCtrl = function($sce, $timeout, detailsConstants) {
        var vm = this;
        var LOCATIONS = detailsConstants.LOCATIONS;

        vm.locations = {
            labri: LOCATIONS.LABRI,
            villageInn: LOCATIONS.VILLAGE_INN
        };

        vm.currentLocation = vm.locations.labri;
        vm.currentImage = _.last(vm.currentLocation.images);

        vm.setLocation = function(location) {
            vm.currentLocation = location;
            vm.currentImage = _.last(vm.currentLocation.images);
        };

        if (vm.currentLocation.images.length > 1) {
            $timeout(function advanceSlide() {
                var currentImage = vm.currentLocation.images.shift();
                vm.currentImage = currentImage;
                vm.currentLocation.images.push(currentImage);
                $timeout(advanceSlide, 3000);
            }, 500, false);
        }
    };

    DetailsCtrl.$inject = ['$sce', '$timeout', 'detailsConstants'];

    angular.module('hayesd').controller('DetailsCtrl', DetailsCtrl);
})();

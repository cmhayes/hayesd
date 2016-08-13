(function() {
    'use strict';

    var detailsDir = function() {
        return {
            bindToController: true,
            controller: 'DetailsCtrl',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/details/details.html'
        };
    };

    angular.module('hayesd').directive('hayesdDetails', detailsDir);
})();

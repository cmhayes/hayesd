(function() {
    'use strict';

    var rsvpDir = function() {
        return {
            bindToController: true,
            controller: 'RsvpCtrl',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/rsvp/rsvp.html'
        };
    };

    angular.module('hayesd').directive('hayesdRsvp', rsvpDir);
})();

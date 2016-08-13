(function() {
    'use strict';

    var partyDir = function() {
        return {
            bindToController: true,
            controller: 'PartyCtrl',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/party/party.html'
        };
    };

    angular.module('hayesd').directive('hayesdParty', partyDir);
})();

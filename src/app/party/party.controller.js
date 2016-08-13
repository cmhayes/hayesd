(function() {
    'use strict';

    // Include parameters, $inject below
    var PartyCtrl = function(partyConstants) {
        var vm = this;

        vm.bridesmaids = partyConstants.BRIDESMAIDS;
        vm.groomsmen = partyConstants.GROOMSMEN;
    };

    PartyCtrl.$inject = ['partyConstants'];

    angular.module('hayesd').controller('PartyCtrl', PartyCtrl);
})();

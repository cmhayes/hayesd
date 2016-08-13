(function() {
    'use strict';

    var RsvpCtrl = function($http, rsvpConstants) {
        var vm = this;

        vm.submitted = false;

        vm.resetForm = function() {
            if (!vm.submitted) {
                return false;
            }

            vm.submitted = false;
        };

        vm.submitRsvp = function(guest) {
            if (vm.rsvpForm.$valid) {
                $http({
                    method: 'POST',
                    url: 'https://formspree.io/mattcaroline102916@gmail.com',
                    data: guest,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(function() {
                    console.log(guest.isAttending === 'false');
                    vm.submitted = true;
                    vm.response = {
                        success: true,
                        msg: guest.isAttending === 'false' ? rsvpConstants.NOT_ATTENDING : rsvpConstants.SUCCESS_MSG
                    };
                }).catch(function(error) {
                    vm.submitted = true;
                    vm.response = {
                        success: false,
                        msg: rsvpConstants.ERROR_MSG
                    };
                });
            }

            return false;
        };
    };

    RsvpCtrl.$inject = ['$http', 'rsvpConstants'];

    angular.module('hayesd').controller('RsvpCtrl', RsvpCtrl);
})();

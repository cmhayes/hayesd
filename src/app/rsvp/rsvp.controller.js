(function() {
    'use strict';

    var RsvpCtrl = function($http, rsvpConstants) {
        var vm = this;

        vm.submitted = false;
        vm.fields = rsvpConstants.FORM_FIELDS;
        vm.guest = {}; //placeholder object for rsvp

        vm.resetForm = function() {
            if (!vm.submitted) {
                return false;
            }

            vm.guest = {};
            vm.submitted = false;
        };

        vm.submitRsvp = function(guest) {
            console.log(vm.rsvpForm);
            if (vm.rsvpForm.$valid) {
                $http({
                    method: 'POST',
                    url: 'https://formspree.io/mattcaroline102916@gmail.com',
                    data: guest,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(function() {
                    vm.submitted = true;
                    vm.response = {
                        success: true,
                        msg: vm.guest.isAttending ? rsvpConstants.SUCCESS_MSG : rsvpConstants.NOT_ATTENDING
                    };
                    vm.resetForm();
                }).catch(function() {
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

(function() {
    'use strict';

    // Include parameters, $inject below
    var NavCtrl = function($filter) {
        var vm = this;

        vm.showNav = false;

        vm.toggleNav = function() {
            vm.showNav = !vm.showNav;
        };

        var date = new Date();
        vm.currentYear = $filter('date')(date, 'yyyy');

        vm.links = [
            {
                text: 'Our story',
                href: '#story-anchor'
            },
            {
                text: 'Our people',
                href: '#party-anchor'
            },
            {
                text: 'Event Details',
                href: '#details-anchor'
            },
            {
                text: 'Registry',
                href: '#registry-anchor'
            }
        ];
    };

    NavCtrl.$inject = ['$filter'];

    angular.module('hayesd').controller('NavCtrl', NavCtrl);
})();

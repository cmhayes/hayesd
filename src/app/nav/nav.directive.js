(function() {
    'use strict';

    var navDir = function() {
        var linkFn = function(scope, elem, attrs, vm) {
            vm.scrollTo = function(anchor) {
                $('html, body').animate({ scrollTop: $(anchor).offset().top }, 1000);
            };
        };

        return {
            bindToController: true,
            controller: 'NavCtrl',
            controllerAs: 'vm',
            link: linkFn,
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/nav/nav.html'
        };
    };

    angular.module('hayesd').directive('hayesdNav', navDir);
})();

(function() {
    'use strict';

    var registryDir = function() {
        return {
            // bindToController: true,
            // controller: 'RegistryCtrl',
            // controllerAs: 'vm',
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/registry/registry.html'
        };
    };

    angular.module('hayesd').directive('hayesdRegistry', registryDir);
})();

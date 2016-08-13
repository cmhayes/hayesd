(function() {
    'use strict';

    var headerDir = function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/header/header.html'
        };
    };

    angular.module('hayesd').directive('hayesdHeader', headerDir);
})();

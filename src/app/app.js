(function() {
    'use strict';

    angular.module('hayesd', ['ngAnimate', 'ngRoute'])
           .run(function() {
                FastClick.attach(document.body);
           });
})();

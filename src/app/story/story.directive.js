(function() {
    'use strict';

    var storyDir = function() {
        return {
            bindToController: true,
            controller: 'StoryCtrl',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {},
            templateUrl: '/hayesd/story/story.html'
        };
    };

    angular.module('hayesd').directive('hayesdStory', storyDir);
})();

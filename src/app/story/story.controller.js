(function() {
    'use strict';

    var StoryCtrl = function($sce, storyConstants) {
        var vm = this;

        vm.story = storyConstants.STORY;
    };

    StoryCtrl.$inject = ['$sce', 'storyConstants'];

    angular.module('hayesd').controller('StoryCtrl', StoryCtrl);
})();

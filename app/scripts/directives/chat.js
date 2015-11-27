'use strict';
appZoo.directive('animalChat',  function($interval) {

    return {
    restruct : 'E',
    templateUrl:"views/chat.html",
    link: function(scope){
        scope.chats = scope.animals.getChat();
    }

    };

});

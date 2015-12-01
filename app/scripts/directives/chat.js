'use strict';
appZoo.directive('animalChat',  function($interval) {

    return {
    restruct : 'E',
    templateUrl:"views/chat.html",
    scope : {
      zoo : "="
    },
    link: function(scope){
      scope.chats = scope.zoo.getChat();
    }

    };

});

'use strict';

Template.game.onRendered(function(){
  System.import('client/game/game').then( function(module) {
    var start = module.default;
  });
});

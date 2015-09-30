'use strict';

let textStart = '';
let textFinal = 'Welcome to Digi Doods ' + Meteor.user().name + '!';

export default function drawWelcome(game){
  if(textStart.length !== textFinal.length){
    game.world.removeAll();
    textStart = textFinal.substring(0, textStart.length+1);

    var text = game.add.text(game.world.centerX, 50, textStart,
        { font: "30px carrier_command", fill: "#fff", align: "center" });

    text.anchor.x = Math.round(text.width * 0.5) / text.width;
  }

  return textStart.length !== textFinal.length;
}


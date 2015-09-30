'use strict';

class WelcomeImages {
  constructor(){
    this.drawn = false;
  }

  draw(game){
    if(!this.drawn){
      let choak = game.add.sprite(game.world.centerX,
                                  game.world.centerY, 'choak');
      choak.scale.setTo(0.5, 0.5);
      choak.anchor.setTo(0.5, 0.5);
      choak.alpha = 0;

      game.add.tween(choak).to( { alpha: 1 }, 2000,
                     Phaser.Easing.Linear.None, true, 0, 0, false);

      let button = game.add.sprite(game.world.centerX,
                   game.world.centerY+game.world.centerY*0.7, 'start');
      button.scale.setTo(1.3, 1);
      button.anchor.setTo(0.5, 0.8);

      let startGame = game.add.text(game.world.centerX,
          game.world.centerY+game.world.centerY*.65, 'Start Game',
          { font: "30px carrier_command", fill: "#fff", align: "center" });
      startGame.anchor.setTo(0.5, 0.5);

      let leftC = game.add.sprite(game.world.centerX*0.05, 31, 'conduit');
      leftC.scale.setTo(0.5, 0.5);

      let rightC = game.add.sprite(game.world.centerX + game.world.centerX*0.926,
                                   31, 'conduit');
      rightC.scale.setTo(-0.5, 0.5);

      this.drawn = true;
    }
  }
}

export default new WelcomeImages();

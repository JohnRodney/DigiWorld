'use strict';
import images from './loaders/images';
import welcomeText from './welcome/text';
import welcomeImages from './welcome/images';
import welcomeLightning from './welcome/lightning';

let lightning;

class game {
  constructor(){
    this.game = new Phaser.Game($(window).width(), $(window).height(),
              Phaser.CANVAS, 'digi-doods',
              {preload: this.preload, create: this.create, render: this.render });

    $(window).resize( () => { this.resizeGame(); } );
    lightning = new welcomeLightning(this.game);
  }

  preload(){
    images(this.game);
  }

  create(){

  }

  render(){
    if(!welcomeText(this.game)){
      welcomeImages.draw(this.game);
      lightning.draw();
    }
  }

  update(){

  }

  resizeGame() {
    this.game.height = $(window).height();
    this.game.width  = $(window).width();
  }
}

export default new game();

'use strict';
import images from './loaders/images';
import welcomeText from './welcome/text';
import welcomeImages from './welcome/images';
import welcomeLightning from './welcome/lightning';
import tileMap from '../tilemap/tilemap';
import character from '../character/character';

let lightning;
let gamePointer;

class game {
  constructor(){
    this.game = new Phaser.Game($(window).width(), $(window).height(),
              Phaser.CANVAS, 'digi-doods',
              {preload: this.preload, create: this.create, render: this.render });

    gamePointer = this;
    $(window).resize( () => { this.resizeGame(); } );
    lightning = new welcomeLightning(this.game);
    this.map = new tileMap(64, 64, 20, 20, 'default');
    this.welcomed = false;
    this.character = new character(1);
  }

  preload(){
    images(this.game);
  }

  create(){

  }

  render(){
    if(!welcomeText(this.game) && !gamePointer.welcomed){
      welcomeImages.draw.call(gamePointer, this.game);
      lightning.draw();
    } else if(gamePointer.welcomed) {
      gamePointer.map.draw(this.game);
    }

    gamePointer.character.walkDown(this.game);
  }

  update(){

  }

  resizeGame() {
    this.game.height = $(window).height();
    this.game.width  = $(window).width();
  }
}

export default new game();

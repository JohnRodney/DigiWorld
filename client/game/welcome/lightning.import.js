'use strict';
import lightning from '../effects/lightning';

class WelcomeLightning {

  constructor(game){
    let centerX = $(window).width()/2;
    let start = centerX - centerX * .9;
    let end = centerX + centerX * 0.9;

    this.game = game;
    this.one = new lightning(game, start, end, 40, 40);
    this.one.color = '0x0000ff';
    this.two = new lightning(game, start, end, 70, 70);
    this.two.color = '0xffffff';
    this.three = new lightning(game, start, end, 100, 100);
    this.three.color = '0x00ff00';
  }

  draw(){
    this.one.draw();
    this.two.draw();
    this.three.draw();
  }
}

export default WelcomeLightning;

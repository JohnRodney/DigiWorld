'use strict';

export default class {
  constructor(number){
    this.number = number;
    this.created = false;
    this.step = 0;
    this.delay = 0;
  }

  create(game){
  }

  draw(game){
    if(!this.created){ this.create(game); }
  }

  walkDown(game){
    if(this.delay === 0){
      if(this.sprite){ this.sprite.kill(); }

      this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'character1_down', this.step);
      this.sprite.scale.setTo(2, 2);
      this.progressStep();
    }
    this.progressDelay();
  }

  progressDelay(){
    this.delay++;
    if(this.delay === 10){ this.delay = 0; }
  }

  progressStep(){
    this.step++;
    if(this.step === 3){ this.step = 0; }
  }

}

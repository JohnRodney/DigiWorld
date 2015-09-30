'use strict';

export class pair {
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
  length(){
    return this.end - this.start;
  }
}

export class strike {
  constructor(game, xs, xe, ys, ye){
    this.game = game;
    this.renderer = false;
    this.segments = 100;
    this.x = new pair(xs, xe);
    this.y = new pair(ys, ye);
    this.color = '0xffffff';
    this.width = 1;
    this.modulation = 10;
  }

  setLocation(xs, xe, ys, ye){
    this.x = new pair(xs, xe);
    this.y.start = ys || this.y.start;
    this.x.end   = ye || this.y.end;
  }

  draw(){
    if(!this.renderer){
      this.renderer = this.game.add.graphics();
    }
    this.renderer.clear();
    this.renderer.moveTo(this.x.start, this.y.start);

    for(let i = 1; i < this.segments+1; i++){
      this.renderer.lineStyle(this.width, this.color, 1);
      this.renderer.lineTo(this.x.length()/this.segments * i + this.x.start,
                           this.y.start + this.randomOffset());

    }
  }
  randomOffset(){
    return Math.floor(Math.random()*this.modulation)-this.modulation/2;
  }
}



export default strike;

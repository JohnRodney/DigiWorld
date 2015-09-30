'use strict'

class pair{
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
  length(){
    return this.end - this.start;
  }
}

class strike{
  constructor(game){
    console.log(game);
    this.game = game;
    this.renderer = false;
    this.segments = 100;
    this.x = new pair(0, 800);
    this.y = new pair(100, 100);
    this.color = '0xffffff';
    this.width = 1;
    this.modulation = 10;
  }

  draw(){
    if(!this.renderer){
      this.renderer = this.game.add.graphics(100, 100);
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

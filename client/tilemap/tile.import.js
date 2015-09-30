'use strict';

export default class {
  constructor(width, height, image, solid){
    this.width = width;
    this.height = height;
    this.image = image;
    this.solid = solid;
  }

  draw(game, x, y){
    /* render image with the size of said tile */
    game.add.sprite(x, y, this.image);
  }
}

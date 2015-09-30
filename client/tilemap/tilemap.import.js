'use strict';
import tile from './tile';

export default class {
  constructor(width, height, cols, rows, name){
    this.width = width;
    this.height = height;
    this.cols = cols;
    this.rows = rows;
    this.tileset = [];
    this.name = name;
    this.initiateTiles();
    this.rendered = false;
  }

  initiateTiles(){
    /* fill the map with grass as default */
    for(let r = 0; r < this.rows; r++){
      this.tileset[r] = [];
      for(let c = 0; c < this.cols; c++){
        this.tileset[r][c] = new tile(this.width, this.height, 'grass', false);
      }
    }
  }

  draw(game){
    /* iterate over all tiles and draw them to the screen */
    if(!this.rendered){
      this.tileset.forEach( (row, ri) => {
        row.forEach( (col, ci) =>{
          col.draw(game, ci*this.width, ri*this.height);
        });
      });
      this.rendered = true;
    }
  }
}

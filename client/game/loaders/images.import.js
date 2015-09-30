'use strict';

export default function loader(game){
  game.load.image('start', 'startbutton.png');
  game.load.image('choak', 'Choak.png');
  game.load.image('conduit', 'conduit.png');
  game.load.bitmapFont('carrier_command', 'fonts/carrier_command.png',
                       'fonts/carrier_command.xml');
}

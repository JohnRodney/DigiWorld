var lightning, test;

Template.game.onRendered(function(){
  drawWelcome();
});

var floor, game, bmpText, textStart;
var textFinal, added = false, one, two, three;

function drawWelcome(){
  textStart = '';
  textFinal = 'Welcome to Digi Doods ' + Meteor.user().name + '!';
  game = new Phaser.Game($(window).width(), $(window).height(), Phaser.CANVAS, 'digi-doods', {preload: preload, create: create, render: render });
  $(window).resize(function() { resizeGame(); } );
}

function resizeGame() {
  var height = $(window).height();
  var width = $(window).width();

  game.width = width;
  game.height = height;

  if (game.renderType === Phaser.WEBGL){
    game.renderer.resize(width, height);
  }
}

function preload() {
  game.load.image('start', 'startbutton.png');
  game.load.image('choak', 'Choak.png');
  game.load.image('conduit', 'conduit.png');
  game.load.bitmapFont('carrier_command', 'fonts/carrier_command.png', 'fonts/carrier_command.xml');
  System.import('client/game/effects/lightning').then(function(module){
    lightning = module.default;
    test = new lightning(game);
  });

}

function create() {
  floor = new Phaser.Rectangle(0, 550, 800, 50);
}

var interval = 0;

function render () {
  if(textStart.length != textFinal.length){
    game.world.removeAll();
    textStart = textFinal.substring(0, textStart.length+1);
    text = game.add.text(game.world.centerX, 50, textStart, { font: "30px carrier_command", fill: "#fff", align: "center" });
    text.anchor.x = Math.round(text.width * 0.5) / text.width;
  }
  else if(!added){
    var choak = game.add.sprite(game.world.centerX, game.world.centerY, 'choak');
    choak.scale.setTo(0.5, 0.5);
    choak.anchor.setTo(0.5, 0.5);
    choak.alpha = 0;
    game.add.tween(choak).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
    added = true;
    var button = game.add.sprite(game.world.centerX, game.world.centerY+game.world.centerY*0.7, 'start');
    button.scale.setTo(1.3, 1);
    button.anchor.setTo(0.5, 0.8);
    var startGame = game.add.text(game.world.centerX*0.9, game.world.centerY+game.world.centerY*0.58, 'Start Game', { font: "30px carrier_command", fill: "#fff", align: "center" });
    button.anchor.setTo(0.5, 0.8);
    var leftC = game.add.sprite(game.world.centerX*0.05, 31, 'conduit');
    leftC.scale.setTo(0.5, 0.5);
    var rightC = game.add.sprite(game.world.centerX + game.world.centerX*0.926, 31, 'conduit');
    rightC.scale.setTo(-0.5, 0.5);

  } else{
    if(interval === 2){
      if(one && one.clear){
        one.clear();
        two.clear();
        three.clear();
      }
      drawLine(-30);
      interval = 0;
    }

    test.draw();
    interval++;
  }
}

function drawLine(y){

  one = game.add.graphics(0, 100);
  two = game.add.graphics(0, 100);
  three = game.add.graphics(0, 100);

  lightningEffect((game.world.centerX*0.9)*2/5, (game.world.centerX*0.1), y);
}

function lightningEffect(amount, startx, starty){
  one.moveTo(startx, starty-30);
  two.moveTo(startx, starty);
  three.moveTo(startx, starty+30);
  for(var x = 0; x < amount; x++){
    advanceTen(x, startx, starty);
  }
}

function advanceTen(base, startx, starty){
  one.lineStyle(1, 0x00d9ef, 1);
  one.lineTo(5*base+startx, starty-30 + randomOffset());
  two.lineStyle(1, 0xefefef, 1);
  two.lineTo(5*base+startx, starty + randomOffset());
  three.lineStyle(1, 0x00ff00, 1);
  three.lineTo(5*base+startx, starty+ 30 + randomOffset());
}

function randomOffset(){
  return Math.floor(Math.random()*10)-5;
}

/* Draw a line with random points
 * break into segments
 * move the segments up and down randomly*/

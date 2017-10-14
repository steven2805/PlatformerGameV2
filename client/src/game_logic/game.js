var levelPlan = require('./levelPlans');
var levelBuilder = require('./levelBuilder');
var Player = require('./player');
var Collision = require('./collisions');


var gameApp = function(){

  var level = new levelBuilder(levelPlan[0]);
  level.constructMap();
  var player = new Player()


  var keyDownHandler = function(evt) {
    if (evt.keyCode === 39) {
      player.moveRight = true;
    }
    if (evt.keyCode === 37) {
     player.moveLeft = true;
   }
   if (evt.keyCode === 32){
     player.jumping = true;
  }
} 

var keyUpHandler = function(evt) {
  if (evt.keyCode === 39) {
    console.log("key has been lifted");
    player.moveRight = false;
  }
  if (evt.keyCode === 37) {
    player.moveLeft = false;
  }
  if (evt.keyCode === 32) {
    player.jumping = false; 
  }
}














document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

function sceneLoading(timestamp){


  // this si used for the jumping mechanic
  if(player.falling === false){
    if(player.jumping){
      player.checkingJumping(level);
      var collision = new Collision(level,player);
      player.falling = true;
    }
    else{
      player.jumping = false;
    }
  }


// this is simply the movement controls
  if(player.falling || player.moveRight || player.moveLeft){
    console.log(player.falling, "falling")
  var collision = new Collision(level, player);
  player.checkingStatues(level);
}    
level.drawLevel();
requestAnimationFrame(sceneLoading)
}

requestAnimationFrame(sceneLoading);




console.log(level.width);
console.log(level.height);
console.log(level.cubeSize);
console.log(level.groundStyle);



}









window.addEventListener('load', gameApp);
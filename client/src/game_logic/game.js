var levelPlan = require('./levelPlans');
var levelBuilder = require('./levelBuilder');
var Player = require('./player');
var Collision = require('./collisions');


var gameApp = function(){

  var level = new levelBuilder(levelPlan[0]);
  level.constructMap();
  var player = new Player()



  var keyDownHandler = function(evt) {
    console.log("something");
    if (evt.keyCode === 39) {
      player.moveRight = true;
    }
    if (evt.keyCode === 37) {
     player.moveLeft = true;
   }
   if (evt.keyCode === 32){
      // player.jumping = true;
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


    if(player.falling === true || player.moveRight === true || player.moveLeft === true){
      console.log("something is true falling or moving");
      player.checkingStatues(level);
      var collision = new Collision(level, player);
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
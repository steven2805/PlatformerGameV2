var levelPlan = require('./levelPlans');
var levelBuilder = require('./levelBuilder');
var Player = require('./player');
var Collision = require('./collisions');

var gameApp = function(){
  var level = new levelBuilder(levelPlan[0]);
  level.constructMap();
  var player = new Player()
  var collision = new Collision(level.walls);

console.log(collision);


  function sceneLoading(timestamp){
    
    player.checkingStatues(level);
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
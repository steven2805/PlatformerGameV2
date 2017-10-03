var levelPlan = require('./levelPlans');
var levelBuilder = require('./levelBuilder');

var gameApp = function(){

  // var canvas = document.getElementById("game-canvas");
  var level = new levelBuilder(levelPlan[0]);
   level.constructMap();
  // console.log(levelPlan[1]);
  var counter = 0;

function sceneLoading(timestamp){
  level.drawLevel();
  console.log(counter++);

  requestAnimationFrame(sceneLoading)

}

  requestAnimationFrame(sceneLoading);




  console.log(level.width);
  console.log(level.height);
  console.log(level.cubeSize);
  console.log(level.groundStyle);



}








window.addEventListener('load', gameApp);
var Collision = function(levelArray,player){

  var playerPosition = [levelArray.playerPosition[0], levelArray.playerPosition[1]];
  var wallsArray = levelArray.walls;

  function between(x, min, max) {
    return x >= min && x <= max;
  }

  for(var coords of wallsArray){
    if(playerPosition[1] + 40 === coords[1]){
      if(between(playerPosition[0], coords[0],coords[0] + 40)){
        player.falling = false;
        break;
      }
      else{
        player.falling = true;
      }
    }
  }

  for(var coords of wallsArray){
    if(playerPosition[0] + 20 === coords[0]){
      if(between(playerPosition[1],coords[1], coords[1] + 40)){
        player.canMoveRight = false;
        break;
      }
      else{
        player.canMoveRight = true;
      }
    }
  }

  for(var coords of wallsArray){
    if(playerPosition[0] === coords[0] + 40 ){
      if(between(playerPosition[1],coords[1], coords[1] + 40)){
        player.canMoveLeft = false;
        break;
      }
      else{
        player.canMoveLeft = true;
      }
    }
  }
}

module.exports = Collision;

var player = function(){
  this.falling = true;
}

player.prototype.checkingStatues = function(level){

  if(this.falling === true){
    level.playerPosition[1] = level.playerPosition[1] + 10; 

  }
}














module.exports = player;

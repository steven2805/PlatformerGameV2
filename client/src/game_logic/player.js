


var player = function(){
  this.falling = true;
  this.moveRight = false;
  this.canMoveRight = true;
  this.moveLeft = false;
  this.canMoveLeft;
  this.jumping = false;
}

player.prototype.checkingStatues = function(level){
  if(this.falling === true){
    level.playerPosition[1] = level.playerPosition[1] + 8; 
  }

  if(this.moveRight && this.canMoveRight){
    level.playerPosition[0] = level.playerPosition[0] + 5;
  }

  if(this.moveLeft && this.canMoveLeft){
    level.playerPosition[0] = level.playerPosition[0] - 5;
  }
}














module.exports = player;

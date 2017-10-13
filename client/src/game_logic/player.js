


var player = function(){
  this.falling = true;
  this.moveRight = false;
  this.canMoveRight = true;
  this.moveLeft = false;
  this.canMoveLeft = true;
  this.jumping = false;
}

player.prototype.checkingStatues = function(level){
  if(this.falling){
    level.playerPosition[1] = level.playerPosition[1] + 8; 
  }

  if(this.moveRight && this.canMoveRight){
    level.playerPosition[0] = level.playerPosition[0] + 5;
  }

  if(this.moveLeft && this.canMoveLeft){
    level.playerPosition[0] = level.playerPosition[0] - 5;
  }
}

player.prototype.checkingJumping = function(level){

  if(this.jumping === true){
    var counter = 0;
    while(counter < 2){
    level.playerPosition[1] = level.playerPosition[1] - 100;
    counter++;
  }
  }
}














module.exports = player;

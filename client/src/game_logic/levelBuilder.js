levelBuilder = function(plan){
  this.width = plan[1].length;
  this.height = plan[1][0].length;
  this.cubeSize = 40; 
 
 // this is the styling for later on, not sure am actually going to use this
  this.groundStyle = plan[0][0];
  this.wallStyle = plan[0][1];
  this.grassStyle = plan[0][2];

  this.walls =[];
  this.grass =[];
  this.brick =[];
  this.coins =[];
  this.wood  =[];
}


levelBuilder.prototype.constructMap = function(){
  var yArray = [];
  var xArray = [];

  
}


module.exports = levelBuilder;
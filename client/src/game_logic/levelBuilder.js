levelBuilder = function(plan){
  this.plan   = plan[1];
  this.width  = plan[1][0].length;
  this.height = plan[1].length;
  this.cubeSize = 40; 

 // this is the styling for later on, not sure am actually going to use this
 this.groundStyle  = plan[0][0];
 this.wallStyle    = plan[0][1];
 this.grassStyle   = plan[0][2];
 this.coinStyle    = plan[0][3];


 this.map   = [];
 this.walls = [];
 this.grass = [];
 this.brick = [];
 this.coins = [];
 this.wood  = [];

 this.playerPosition = null;

}

var imgBricks = document.createElement('img');
imgBricks.src = "/images/bricks.png"

levelBuilder.prototype.constructMap = function(){
  var yArray = [];
  var xArray = [];

  for (var y = 0; y < this.height; y ++){
    var yCoords = y * this.cubeSize;
    yArray.push(yCoords);
  }
  for (var x = 0; x < this.width; x++){
    var xCoords = x * this.cubeSize;
    xArray.push(xCoords);
  }
  for( var yElement of yArray){
    for( var xElement of xArray){
      var coords =[xElement, yElement]
      this.map.push(coords);
    }
  }
  this.objectFinder();
  return this.map  
};

levelBuilder.prototype.objectFinder = function(){
  for( var y = 0; y < this.height; y++){
    for ( var x = 0; x < this.width; x++){
      var calculation = (y * 32) + x;
      var location = this.map[calculation];

      switch(this.plan[y][x]){        
        case 'x':
        this.walls.push(location);
        break;
        case 'g':
        this.grass.push(location);
        break;
        case 'b':
        this.brick.push(location);
        break;
        case 'w':
        this.wppd.push(location);
        break;
        case 'c':
        this.coin.push(location);
        break;
        case 'k':
        this.key.push(location);
        break;
        case 'd':
        this.door.push(location);
        break;
        case 'p':
        this.playerPosition = location;
        default:
        break;
      }
    }
  }
  this.drawLevel();
}


// temporary needs replacing with actual draw function

levelBuilder.prototype.drawLevel = function(){



  var c = document.getElementById("game-canvas");

  var ctx = c.getContext("2d");

  ctx.clearRect(0,0,1280,720);
//   console.log(this.height);
// console.log(this.walls);
ctx.translate(0,0);
var cube = this.cubeSize

this.walls.forEach(function(coords){
  ctx.drawImage(imgBricks,coords[0],coords[1],cube,cube);
  ctx.stroke();  
})

ctx.fillRect(this.playerPosition[0],this.playerPosition[1],20,40);
ctx.stroke();

}


module.exports = levelBuilder;
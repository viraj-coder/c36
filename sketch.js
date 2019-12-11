var canvas,playerCount, database;
var gameState=0,bgImage,form,player,game;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.getState();
game.start();

  
}

function draw(){
  background("white");
 if (playerCount===4){
   game.Update(1);

 }
 if(gameState==1){
   clear();
   game.play();
   
 }
    
    
  
}



function showError(){
  console.log("Error in writing to the database");
}

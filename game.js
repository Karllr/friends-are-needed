var keys=[];
var levelWidth;
var levelHeight;
var level=0;
function keyPressed(){
  keys[keyCode]=true;
}
function keyReleased(){
  keys[keyCode]=false;
}
var player1;
var player2;
var blocks=[
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
var cam={
  x:0,
  y:0
};
var song;
var zoom=1;
// var testMap=[
//   '   1 11    ',
//   '  111 1    ',
//   '   1 11    ',
//   '           ',
// ];
function setup() {
  song=loadSound('1011406_Prelude.mp3',ok);
  player1=new Player1(200,200,0);
  player2=new Player2(200,250,0);
  createCanvas(windowWidth,windowHeight);
  Load(blocks,worldMap);
}
function ok(){
song.play();
}
function draw() {
  //if(!song.isPlaying()){
    //song.play();
  //}
  frameRate(60);
  background(22, 165, 150);
  //background(0);
  for(var i=0;i<worldMap[level].length;i++){
    levelHeight=worldMap[level].length;
    levelWidth=worldMap[level][i].length;
  }
  push();
  if(levelWidth*50>width){
    cam.x=lerp(cam.x, width/2-(player1.x+player2.x)/2, 0.05);
  }else{
    cam.x=-levelWidth*25;
  }
  if(levelHeight*50>height){
    cam.y=lerp(cam.y, height/2-(player1.y+player2.y)/2, 0.05);
  }else{
    cam.y=-levelHeight*25;
  }
  translate(width/2,height/2);
  scale(((width+height)/(2300+(player1.Sz+player1.Sz)*4))*zoom);
  translate(cam.x,cam.y);
  if(levelWidth*50>width){
    translate(-width/2,0);
  }
  if(levelHeight*50>height){
    translate(0,-height/2);
  }
  for(var i=0;i<blocks[level].length;i++){
    blocks[level][i].updateTextures(blocks[level]);
    blocks[level][i].show();
    blocks[level][i].animate();
  }
  player1.update(blocks[level],player2);player2.update(blocks[level],player1);
  player1.show();
  player2.show();
  pop();
  if(player1.hitPortal&&player2.hitPortal){
    level++;
    Load(blocks, worldMap);
    Erase(blocks[level-1]);
    player1.respawn.x=player1.x;
    player1.respawn.y=player1.y;
    player2.respawn.x=player2.x;
    player2.respawn.y=player2.y;
    player1.gravity=0.8;
    player2.gravity=0.8;
    player1.accel=5;
    player2.accel=5;
  }
  if(dist(player1.x,player1.y,player2.x,player2.y)>1200&&dist(player1.x,player1.y,player2.x,player2.y)<1600){
    zoom-=0.01;
    if(zoom<0.9){
      zoom=0.9
    }
  }else if(dist(player1.x,player1.y,player2.x,player2.y)>1600&&dist(player1.x,player1.y,player2.x,player2.y)<1800){
    zoom-=0.01;
    if(zoom<0.8){
      zoom=0.8;
    }
  }else if(dist(player1.x,player1.y,player2.x,player2.y)>1800){
    zoom-=0.01;
    if(zoom<0.7){
      zoom=0.7;
    }
  }else{
    zoom=1;
  }
}

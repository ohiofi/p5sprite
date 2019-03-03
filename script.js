/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
/*global Sprite*/
// create variables up here
let myGif
let gifWidth = 100;
let count=0;
let frameRateSum =0;
let player,p2,myscreen;
//let gravity = 1;
function preload(){
  player = new Sprite("https://cdn.glitch.com/221be255-1cf7-4801-a9fa-17588c2ffa87%2FLoneSpecificGuillemot-max-1mb.gif?1551576414729");
  p2 = new Sprite("https://cdn.glitch.com/221be255-1cf7-4801-a9fa-17588c2ffa87%2Fvegetables.gif?1551289742559");
  //myGif.src = "https://cdn.glitch.com/221be255-1cf7-4801-a9fa-17588c2ffa87%2Fvegetables.gif?1551289742559";
  //myGif.style.position = "absolute"
  //document.body.appendChild(myGif);
  player.image.width = 100;
  p2.image.width = 100;
  
  player.startingdirection = 90;
  
}

function setup(){ // only when game loads
  createCanvas(windowWidth,windowHeight);
  p2.goto(width-200,200)
  // myscreen = new Screen();
  // myscreen.onkey("goLeft",LEFT_ARROW)
  // myscreen.onkey("goRight",RIGHT_ARROW)
  // myscreen.onkey("goFwd",UP_ARROW)
}

// function goLeft(){
//   p2.forward(1)
//   p2.left(5)
// }

// function goRight(){
//   p2.forward(1)
//   p2.right(5)
// }

// function goFwd(){
//   p2.forward(5)
// }

function movePlayer2(){
  if(keyIsDown(LEFT_ARROW)){
    p2.left(5)
    // if(p2.direction < 0 || p2.direction > 180){
    //   p2.image.style.transform="scaleX(-1)"
    // }
    // else{
    //   p2.image.style.transform="scaleX(1)"
    // }
  }
  else if(keyIsDown(RIGHT_ARROW)){
    //this.x += 13;
    p2.right(5)
    // if(p2.direction < 0 || p2.direction > 180){
    //   p2.fliphorizontal = true
    // }
    // else{
    //   p2.fliphorizontal = false
    // }
  }
  if(keyIsDown(UP_ARROW)){
    //this.y += -13;
    p2.forward(5)
  }
  else if(keyIsDown(DOWN_ARROW)){
    player.y += 13;
  }
}

function draw(){ // this is a built-in forever loop
  background("lightblue");
  showFPS()
  //print(player.towards(p2))
  player.setheading(player.towards(p2))
  //player.setheading(player.towards({x:mouseX,y:mouseY}))
  movePlayer2()
  player.forward(2)
  player.show()
  p2.show()
  //myscreen.update()
}

function showFPS(){
  frameRateSum += frameRate()
  text("FPS: "+round(frameRateSum/frameCount),10,10)
}


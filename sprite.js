/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
class Sprite{
  constructor(gifURL){
    this.x = windowWidth/2; 
    this.y = windowHeight/2;
    this.direction = 0;
    this.startingdirection = 0;
    this.flipx = false;
    //this.velocityY = -10
    //this.grounded = false;
    this.image = new Image();

    this.image.src = gifURL;
    this.width = this.image.width;
    this.height = this.image.height;
    this.image.style.position = "absolute";
    document.body.appendChild(this.image);
  }
  //distance is a getter method. requires 1 or 2 arguments, either 1 Sprite object or 2 coordinates. returns the distance.
  distance(otherSprite,yloc){
    if (typeof yloc !== "undefined"){ // if two arguments were given
      return dist(this.x,this.y,otherSprite,yloc)
    }else{ // if only one argument was given
      return dist(this.x,this.y,otherSprite.x,otherSprite.y)
    }
  }
  forward(speed){
    this.x += sin(radians(this.direction+this.startingdirection)) * speed;
    this.y -= cos(radians(this.direction+this.startingdirection)) * speed;
  }
  goto(somex,somey){
    this.x = somex;
    this.y = somey;
  }
  left(turnAmount){
    this.direction += -1*(turnAmount);
  }
  right(turnAmount){
    this.direction += turnAmount;
  }
  setheading(input){
    this.direction = input-this.startingdirection;
  }
  show(){
    // if(this.flipx){
    //   this.image.style.transform="scaleX(-1)"
    //   //setTimeout(()=>this.image.style.transform="scaleX(-1)",10) //flip horizontally
    // }
    if(this.direction != 0){
      this.image.style.transform="rotate("+this.direction+"deg)" //rotate
    }
    this.image.style.left = this.x - this.image.width/2 + "px"
	  this.image.style.top = this.y - this.image.height/2 + "px"
	  //this.image.width = this.width + "px"//
  }
  //touching is a getter method. requires 1 or 2 arguments, either 1 Sprite object or 2 coordinates. returns true or false.
  touching(otherSprite,yloc){
    // """
    // Returns True if another sprite or a point (x,y) is touching the wall.
    // This method is overloaded (there are multiple ways to call it)
    //   EITHER:
    //     mywall.touching(player1)
    //   OR:
    //     mywall.touching(newx, newy)
    // """
    let checkx, checky
    if (typeof yloc !== "undefined"){ // if two arguments were given
      checkx = otherSprite
      checky = yloc
    }else{ // if only one argument was given
      checkx = otherSprite.x
      checky = otherSprite.y
    }
    // Only do these complex calculation if you are within range of the wall
    if (this.distance(checkx,checky) <= Math.sqrt(this.width/2 * this.width/2 + this.height/2 * this.height/2)){
      // Don't bother with calculating rotation if there is no rotation
      if (this.direction == 0){
        return this.x-this.width/2.0 < checkx < this.x+this.width/2.0 && this.y-this.height/2.0 < checky < this.y+this.height/2.0
      }else{
        // Rotate point checkx,checky clockwise by a given angle around a given origin.
        // The angle should be given in radians.
        let angle = Math.radians(this.heading()*-1)
        let rotatedx = this.x + Math.cos(angle) * (checkx - this.x) - Math.sin(angle) * (checky - this.y)
        let rotatedy = this.y + Math.sin(angle) * (checkx - this.x) + Math.cos(angle) * (checky - this.y)
        return this.x-this.width/2.0 < rotatedx < this.x+this.width/2.0 && this.y-this.height/2.0 < rotatedy < this.y+this.height/2.0
      }
    }
    return false
  }
  towards(someSprite){
    //if(someSprite.hasOwnProperty('x') && someSprite.hasOwnProperty('y')){ // if this object has an x and a y
      let opposite = this.x - someSprite.x
      let adjacent = this.y - someSprite.y
      //return -degrees(Math.asin(opposite/adjacent))
    return (Math.atan2(adjacent, opposite) * 180 / Math.PI) - this.startingdirection
    //}
  }
}
//myGif.style.left = mouseX - gifWidth/2 + "px"
	//myGif.style.top = mouseY - myGif.height/2 + "px"
	//myGif.style.width = gifWidth + "px"
 
  //myGif.style.transform="rotate("+frameCount+"deg)" //rotate
  //myGif.style.transform="scaleX(-1)" //flip horizontally
// class Screen{
//   constructor(){
//     this.keybindings=[];
//   }
//   onkey(myfun,mykey){
//     this.keybindings.push({functionname:myfun,keycode:mykey})
//   }
//   update(){
//     for(let i=0;i<this.keybindings.length;i++){
//       if(keyIsDown(this.keybindings[i].keycode)){
//         window[this.keybindings[i].functionname]();
//       }
//     }
//   }
// }


function Star(x,y,z,sze){
    this.x = x;
    this.y = y;
    this.z = z;
    this.sze = sze;
    var zSpeed = 50;
    var darken = 1;

    this.draw = function(){
      translate(this.x,this.y,this.z);
      scale(sze);
      fill(255,255,255,255,255-darken);
      sphere(3);
      fill(255,255,255,100-darken);
      sphere(6);
      fill(255,255,255,50-darken);
      sphere(9);
    };
    this.flyBy = function () {
      this.z = this.z - zSpeed;
      
      
      if(this.z < - 3500){
        this.z = 300;
        this.x = random(1000);
        this.y = random(1000);
        zSpeed = random(25,50);
      }
  
    
      if(this.z<-1000){
        push(
          new Star(random(1000),random(1000),0,random(5,20)),
          new Star(random(1000),random(1000),0,random(5,20)),
          new Star(random(1000),random(1000),0,random(5,20)),
          new Star(random(1000),random(1000),0,random(5,20)),
          new Star(random(1000),random(1000),0,random(5,20)),
          new Star(random(1000),random(1000),0,random(5,20)),
          new Star(540,400,0,5),
          new Star(250,500,0,1),
          new Star(100,600,0,5)
        );
      } 
    };
  }

  


function setup () {
    createCanvas(1000,1000,WEBGL);
    stars = [
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(random(1000),random(1000),0,random(5)),
      new Star(540,400,0,5),
      new Star(250,500,0,1),
      new Star(100,600,0,5)
    ];
    
  }
  
var bSze = 0;
var stars;

var shipX = -250;
var shipY = -250;
var shipZ = 0;
var xSpeed = 5;
var ySpeed = 5;

function draw () {
    background(20);
    //translate(-500,-500);
    for(var s = 0; s < stars.length; s++){
      //camera(mouseX,mouseY,stars[s].z);
      camera(mouseX,mouseY);
      stars[s].draw();
      
      stars[s].flyBy();
      translate(-500,-500);
      sphere(25);
      sphere(10);
      sphere(5);
      resetMatrix();
      translate(shipX,shipY,shipZ);
      camera(mouseX,mouseY);
      //directionalLight(10,10,10,10,stars[s].x,stars[s].y,stars[s].z);
      var dirX = (mouseX / width - 0.5) *2;
      var dirY = (mouseY / height - 0.5) *(-2);
      directionalLight(250, 250, 250, 0,0, 0.25);
      ambientMaterial(60);
      rotateZ(frameCount * 0.05);
      rotateY(frameCount * 0.07);
      //fill(0);
      box(100+bSze);
      resetMatrix();
    }
    if(keyIsDown(87)){
      shipY = shipY - ySpeed;
    }
    if(keyIsDown(83)){
      shipY = shipY + ySpeed;0.
    }
    if(keyIsDown(65)){
      shipX = shipX - xSpeed;
    }
    if(keyIsDown(68)){
      shipX = shipX + xSpeed;
    }
    if (keyIsDown(70)) {
        shipZ += 15;
    }
    if (keyIsDown(71)) {
        shipZ -= 15;
    }
    if(keyIsDown(17)){
      bSze += 5;
    }

}
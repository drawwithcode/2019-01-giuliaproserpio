function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background("rosybrown");
  frameRate(60);
  }

function draw() {
  noFill();

  stroke(
      color("mistyrose"),
      frameCount/360
    );

  translate(windowWidth/2,windowHeight/2);
  line(cos(frameCount)*300, sin(frameCount)*300, 300, 0);

  rotate(180)
  line(cos(frameCount)*300, sin(frameCount)*300, 300, 0);

  stroke(
      color("lavander"),
      frameCount/360
  );
  translate(100,0);
  line(cos(frameCount)*200, sin(frameCount)*200, 200, 0);


  stroke(
      color("lightcyan"),
      frameCount/360
  );
  translate(-200,0);
  rotate(180)
  line(cos(frameCount)*200, sin(frameCount)*200, 200, 0);

  stroke(
      color("aliceblue"),
      frameCount/360
  );
  translate(-100,0);
  rotate(180)
  line(cos(frameCount)*100, sin(frameCount)*100, 100, 0);


  if(frameCount == 360) {
    noLoop();
  }
}

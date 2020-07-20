function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);
  rect(300,200,200,200);
  triangle(400,0,300,200,500,200);
  rect(100,300,200,100);
  rect(500,300,200,100);
  triangle(150,150,200,300,100,300);
  triangle(250,150,300,300,200,300);
  triangle(550,150,600,300,500,300);
  triangle(650,150,700,300,600,300);
}
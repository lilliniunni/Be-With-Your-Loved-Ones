
// Sample code for Project 2
// Draws 3D Primitives (sphere, box, cylinder, cone, torus)
//Yunni Zhu

// records the passage of time, used to move the objects

// this is called once at the start of the program
function setup() {
  //createCanvas(600, 600, WEBGL);
  
  //let fov = 60.0;  // 60 degrees field of view
  //perspective(PI * fov / 180.0, width / height, 0.1, 2000);
}

// this is called repeatedly to create new per-frame images
function draw() {
  
  //background(180, 180, 255);  // light blue background
  
  //// set the virtual camera position
  ////camera(0, 0, 85, 0, 0, 0, 0, 1, 0);  // from, at, up
  ////camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
  //// include a little bit of light even in shadows
  //ambientLight(60, 60, 60);
  
  //// set the light position
  //pointLight(255, 255, 255, 100, -100, 300);

  //noStroke();  // don't draw polygon outlines
  
  //let delta = 25;
  
  
  //fill(250);
  //push();
  //translate (-5.0 * sin(time), 0, 0);
  //translate (0, 0, -5.0 * sin(time));
  //let box_axis = createVector (0.0, 1.0, 0.0);
  
  //rotate (-time, box_axis);
  
  //body();
  //face();
  //bow();
  //legs();
  //arms();
  //pop();
  
  
  //time += 0.01;  // update time

}
function yoyo(){
  push();
  //translate (-5.0 * sin(time), 0, 0);
  //translate (0, 0, -5.0 * sin(time));
  let box_axis = createVector (0.0, 1.0, 0.0);
  
  //rotate (-time, box_axis);

  body();
  face();
  bow();
  arms();
  pop();
}
function yoyo_sleep(){
  push();
  body();
  face();
  bow();
  pop();
}

function face(){
  push();
  glasses();
  eyes();
  mouth();
  brows();
  pop();
}
function brows(){
  //left brow
  fill(191, 127, 44);
  push();
  translate(-4, -13.5, 6.5);
  rotateZ(1.57);
  rotateX(-0.5);
  cylinder(0.5,2);
  pop();
  
  //right brow
  fill(191, 127, 44);
  push();
  translate(4, -13.5, 6.5);
  rotateZ(1.57);
  rotateX(0.5);
  cylinder(0.5,2);
  pop();
}

function mouth(){  
  //tongue
  fill(242, 142, 133);
  push();
  translate(0, -2, 11.5);
  rotateX(0.75);
  cone(3.5, 6);
  pop();
  
}

function glasses() {
  //left glasses
  fill(255, 252, 242);
  push();
  translate(-4.3, -11, 9.5);
  rotateX(0.3);
  torus(4, 0.3, 40, 20);
  pop(); 
  
  //right glasses
  fill(255, 252, 242);
  push();
  translate(4.3, -11, 9.5);
  rotateX(0.3);
  torus(4, 0.3, 40, 20);
  pop(); 
}

function eyes(){  
  //left eye
  fill(74, 45, 8);
  push();
  translate(4.3, -11, 8);
  sphere(1.5);
  pop();
  
  
  //right eye  
  fill(74, 45, 8);
  push();
  translate(-4.3, -11, 8);
  sphere(1.5);
  pop(); 
  
  //left pupil  
  fill(255,255,255);
  push();
  translate(-4, -11.5, 9);
  sphere(0.5);
  pop(); 
  
  //right pupil  
  fill(255,255,255);
  push();
  translate(4.6, -11.5, 9);
  sphere(0.5);
  pop();
}

function closed_eyes(){
  //left eye
  fill(74, 45, 8);
  push();
  translate(3, -11, 8);
  rotateZ(1.57);
  rotateX(-0.2);
  cylinder(0.3,4);
  pop();
  
  //right eye
  fill(74, 45, 8);
  push();
  translate(-3, -11, 8);
  rotateZ(1.57);
  rotateX(0.2);
  cylinder(0.3,4);
  pop();
}

function closed_mouth(){
  fill(242, 142, 133);
  push();
  translate(0, -2, 11.1);
  rotateX(0.75);
  cone(3.5, 6);
  pop();
}


function sad_mouth(){
  fill(242, 142, 133);
  push();
  translate(0, -8, 8.5);
  rotateX(-3.05);
  cone(3.5, 6);
  pop();
}


function body(){
  //center structure 
  //made up of mutiple cones
  let cone_axis = createVector (0.0, 1.0, 0.0);   
  let torus_axis = createVector (0.0, 0.0, 1.0);
  for (let i = 0; i < 15.5; i+=0.1){
    fill(255, 235, 129);
    push();
    translate(0, -0.3-i);
    rotateX(PI);
    scale(0.5, 0.5, 0.5);
    cylinder(29-i, 1);
    pop();
  }
  for (let i = 0; i < 1.5; i+=0.1){
    fill(250, 210, 219);
    push();
    translate(0, -0.3+i);
    rotateX(PI);
    //rotate (-time, cone_axis);
    scale(0.5, 0.5, 0.5);
    cylinder(29-i, 1);
    pop();
  }
  //forehead  
  fill(191, 127, 44);
  push();
  translate(0, -16, 0);
  rotateX(1.54);
  //rotate (time, torus_axis);
  torus(6, 1, 40, 20);
  pop();  
}

function bow(){
  //sphere in the center
  fill(250, 210, 219);
  push();
  translate(0, -19, 3.5);
  sphere(2.5);
  pop(); 
  
  //left cone
  fill(250, 210, 219);
  push();
  translate(4.5, -19, 3);
  rotateX(1.9);
  rotateZ(1.4);
  cone(5, 8);
  pop();
  
  //right cone  
  fill(250, 210, 219);
  push();
  translate(-4.5, -19, 3);
  rotateX(1.9);
  rotateZ(-1.4);
  cone(5, 8);
  pop();
}
function legs(){
  
  //right leg
  fill(255, 235, 129);
  push();
  translate(4, 0, 0);
  cylinder(1,17);
  pop();
  
  //left leg
  fill(255, 235, 129);
  push();
  translate(-4, 0, 0);
  cylinder(1,17);
  pop();  
  
  //right foot palm
  fill(162, 221, 235);
  push();
  translate(4, 7.8, 1.5);
  rotateZ(1.57);
  rotateX(1.57);
  cylinder(1.2,5);
  pop();
  
  //left foot palm
  fill(162, 221, 235);
  push();
  translate(-4, 7.8, 1.5);
  rotateZ(1.57);
  rotateX(1.57);
  cylinder(1.2,5);
  pop();
  
  //right toes
  fill(162, 221, 235);
  push();
  translate(4, 7.5, 3.5);
  sphere(1.55);
  pop();
  
  
  //left toes
  fill(162, 221, 235);
  push();
  translate(-4, 7.5, 3.5);
  sphere(1.55);
  pop();
}


function arms(){
  //left arm
  fill(255, 235, 129);
  push();
  translate(-12, -7.5, 2);
  rotateZ(-1.9);
  rotateX(0.3);
  cylinder(0.7,15);
  pop();
  
  //right arm
  fill(255, 235, 129);
  push();
  translate(12, -8, 5);
  rotateZ(1.9);
  rotateX(-0.3);
  cylinder(0.7,12);
  pop();
  
  //left hand
  fill(255, 235, 129);
  push();
  translate(-19, -5, 0.5);
  sphere(1.55);
  pop();
  
  //right hand
  fill(255, 235, 129);
  push();
  translate(16.5, -6, 7);
  sphere(1.55);
  pop();
}
function rotate_arms(time){
  push();
  rotate(0.15*-sin(frameCount * 0.07));
  arms();
  pop();
}
function sad_yoyo(){
  push();
  body();
  glasses();
  eyes();
  arms();
  sad_mouth();
  brows();
  bow();
  pop();
}


function sad_yoyo_pos2(){
  push();
  translate(-40,0,0);
  body();
  glasses();
  eyes();
  arms();
  sad_mouth();
  brows();
  bow();
  pop();
}
function bobo_body(){
  //center structure 
  //made up of mutiple cones
  let cone_axis = createVector (0.0, 1.0, 0.0);   
  let torus_axis = createVector (0.0, 0.0, 1.0);
  for (let i = 0; i < 15.5; i+=0.1){
    fill(255, 235, 129);
    push();
    translate(0, -0.3-i);
    rotateX(PI);
    scale(0.5, 0.5, 0.5);
    cylinder(29-i, 1);
    pop();
  }
  for (let i = 0; i < 1.5; i+=0.1){
    fill(150, 247, 250);
    push();
    translate(0, -0.3+i);
    rotateX(PI);
    //rotate (-time, cone_axis);
    scale(0.5, 0.5, 0.5);
    cylinder(29-i, 1);
    pop();
  }
  //forehead  
  fill(38, 28, 5);
  push();
  translate(0, -16, 0);
  rotateX(1.54);
  //rotate (time, torus_axis);
  torus(6, 1, 40, 20);
  pop();

}

function bobo_brows(){
  //left brow
  fill(38, 28, 5);
  push();
  translate(-4, -13.5, 6.5);
  rotateZ(1.57);
  rotateX(-0.5);
  cylinder(0.7,3);
  pop();
  
  //right brow
  fill(38, 28, 5);
  push();
  translate(4, -13.5, 6.5);
  rotateZ(1.57);
  rotateX(0.5);
  cylinder(0.7,3);
  pop();
}

function bobo_eyes(){
  //left eye
  fill(38, 28, 5);
  push();
  translate(4.3, -11, 7);
  sphere(1.5);
  pop();
  
  
  //right eye  
  fill(38, 28, 5);
  push();
  translate(-4.3, -11, 7);
  sphere(1.5);
  pop(); 
  
  //left pupil  
  fill(255,255,255);
  push();
  translate(-5, -11.5, 7.8);
  sphere(0.5);
  pop(); 
  
  //right pupil  
  fill(255,255,255);
  push();
  translate(4.4, -11.5, 8);
  sphere(0.5);
  pop();

}

function bobo(){
  push();
  translate(40,4,0);
  bobo_body();
  bobo_eyes();
  arms();
  mouth();
  bobo_brows();
  pop();
}

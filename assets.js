//*****************IMPORTANT PLEASE READ**************************
//For Object Instancing: see line 161, 207, 227

function setup() {
}

function draw() {
}

function table() {
  fill(239, 184, 132);
  push();
  translate(15, 6.7, -5);
  rotateX(3.1);
  //scale(10,10,10);
  box(500, 1,100);
  pop();
}
function yoyo_plate(){
  fill(255, 255,255);
  push();
  translate(2,2, -5);
  rotateX(3.1);
  cylinder(27,0.5);
  pop();
  
  fill(255, 255,255);
  push();
  translate(2,5, -13);
  rotateX(3.1);
  cylinder(15,2);
  pop();
}
function sleep_zzz_vector(){
  
  push();
  scale(0.5, 0.5, 0.5);
  translate(10,-12,2);
  z();
  pop();
  
  
  push();
  scale(0.8, 0.8, 0.8);
  translate(5,-8,2);
  z();
  pop();
  
  push();
  scale(1.2, 1.2, 1.2);
  translate(4, -6,2);
  z();
  pop();

}
function sleep_zzz2(){
  push();
  scale(0.5, 0.5, 0.5);
  rotateY(0.5);
  translate(20,-12,2);
  z();
  pop();
  
  push();
  scale(0.8, 0.8, 0.8);
  rotateY(0.5);
  translate(15,-8,2);
  z();
  pop();
  
  push();
  scale(1.2, 1.2, 1.2);
  rotateY(0.5);
  translate(14, -6,2);
  z();
  pop();
}
function z(){
  fill(9, 92, 176);
  push();
  translate(19.5, -20, -5);
  rotateX(3.1);
  box(6, 1);
  pop();
  
  fill(9, 92, 176);
  push();
  translate(20, -22.5, -5);
  //rotateY(2);
  rotateZ(2.5);
  rotateX(1);
  box(8, 1);
  pop();
  
  fill(9, 92, 176);
  push();
  translate(20.5, -25, -5);
  //rotateY(2);
  rotateX(3.1);
  box(6, 1);
  pop();
}
function flower_center(){
  fill(255, 234, 49);
  push();
  sphere(3);
  pop();
}

function flower_pedal(){
  fill(274,176,176);
  push();
  //translate(31.5, -43.5, -15);
  sphere(3);
  pop();
}

function flower(){
  push();
  translate(35, -45, -15);
  flower_center();
  pop();
  
  push();
  translate(31.5, -48.5, -15);
  flower_pedal();
  pop();
  
  push();
  translate(36, -48.5, -15);
  flower_pedal();
  pop();
  
  push();
  translate(39.5, -45, -15);
  flower_pedal();
  pop();
  
  push();
  translate(39.5, -45, -15);
  flower_pedal();
  pop();
  
  push();
  translate(35.5, -41.5, -15);
  flower_pedal();
  pop();
  
  
  push();
  translate(30, -44, -15);
  flower_pedal();
  pop();
  
  push();
  fill(6, 148, 54);
  translate(35, -35, -17);
  rotateZ(1.5);
  box(30, 1);
  pop();
  
}

//OBJECT INSTANCING: for object flower.
// we draw it multiple times here and place them in different positon
// For clarity, the flowers are on the right on the begining scene
//============================================================
function flowers(){
  push();
  flower();
  pop();
  
  push();
  translate(7, -12, -3);
  flower();
  pop();
  
  
  push();
  rotateZ(0.1);
  translate(8, -4, 0);
  flower();
  pop();
}

function vase(){
  //top
  fill(187, 240, 219);
  push();
  translate(40, -20, -15);
  cone(10, 20);
  pop();
  
  //bottom
  fill(187, 240, 219);
  push();
  translate(40, -10, -15);
  cylinder(10, 25.5);
  pop();

}

function flower_display(){
  push();
  flowers();
  vase();
  pop();
}

//OBJECT INSTANCING: for object flower_display.
//============================================================
function environment(){
  push();
  table();
  pop();
  
  push();
  flower_display();
  pop();
  
  push();
  translate(-80,0,0);
  flower_display();
  pop();
  
  push();
  yoyo_plate();
  pop();
}
//OBJECT INSTANCING: for object lamp.
//============================================================
function environment2(){
  push();
  table();
  pop();
  
  push();  
  rotateX(2.7);
  translate(25, 50, -15);
  lamp();
  pop();
  
  push();
  rotateX(2.7);
  translate(0, 50, -15);
  lamp();
  pop();
  
  push();
  rotateX(2.7);
  translate(-25, 50, -15);
  lamp();
  pop();
}

function lamp(){
  push();
  fill(255, 142, 135);
  cone(10, 20);
  pop();
  
  push();
  translate(1, -10, 0);
  fill(255, 217, 118);
  sphere(4);
  pop();
}

function environment3(){
   push();
   translate(30,0,0);
   //yoyo_plate();
   pop();
   
   push();
   table();
   pop();
   
   push();
   rotateX(2.7);
   translate(-35, 50, -15);
   lamp();
   pop();

}

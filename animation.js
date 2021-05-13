//*****************IMPORTANT PLEASE READ**************************
//For Camera Motion: see line 36, 51, 62, 81
//For Object Instancing: go to asset.js, see line 161, 207, 227

let time = 0;
let yoyo_x_pos = 0;
let yoyo_z_pos = 0;

let yoyo_x_pos1 = 0;
let yoyo_z_pos1 = 0;


let yoyo_x_pos2 = 0;
let yoyo_z_pos2 = 0;

let delta = 10;

let image;
let pg;
function preload() {
  image = loadImage('text.png');


}

function setup(){
  createCanvas(600, 600, WEBGL);
  
  let fov = 60.0;  // 60 degrees field of view
  perspective(PI * fov / 180.0, width / height, 0.1, 2000);
}

function draw(){
  
  if (frameCount < 850){
      background(235, 255, 235);
    // set the virtual camera position
    camera(frameCount * 0.04, 0, 85, 0, -16, 0, 0, 1, 0); 
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, 100, -100, 200);
    noStroke();
    scale(1.1,1.1,1.1);
    push();
    yoyo_movement(time);
    environment();
    sleep_zzz(time);

    pop();
    //console.log(time);
  }
  if (frameCount >= 850 && frameCount < 1050){
      background(235, 255, 235);
    camera(0, 0, 50+frameCount * 0.04, 0, -16, 0, 0, 1, 0); 
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, 100, -100, 200);
    noStroke();
    push();
    environment2();
    yoyo_movement(time);
    pop();
  }
  if (frameCount >= 1050 && frameCount < 1900){
      background(235, 255, 235);
    camera(10-frameCount * 0.04 + delta, 0 - delta* 0.01, 90 - delta* 0.2, 0, -16, 0, 0, 1, 0); 
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, 0, -100, 200);
    noStroke();
    push();
    bobo_movement(time);
    yoyo_movement(time);
    environment3();
    pop();
    if (frameCount < 1300){
      delta = delta + 0.05;
    }
    if (frameCount >= 1300){
      delta = delta + 0.1;
    }
    console.log(time);
  }    
  if (frameCount >= 1900 && frameCount < 2400){
      background(235, 255, 235);
    camera(0, 0, 90 + sin(frameCount * 0.05), 0, -16, 0, 0, 1, 0); 
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, 0, -100, 200);
    push();
    texture(image);
    rect(-35, -20, 72, 4);
    pop();
  }
  
  time += 0.01;  // update time

}
function yoyo_movement(time){
  push();
  if (time < 5){
    yoyo_phase1(time);
  }
  if (time > 5){
    yoyo_phase2(time);
  }
  if (time >= 8.5){
    yoyo_phase3(time);
  }
  pop();

}

function sleep_zzz(time){
  push();
  if (time < 3 && time < 4){
    axis = createVector (0.0, 1.0, 0.0);
    //rotate (sin(frameCount * 0.01), axis);
    scale(abs(sin(frameCount * 0.01)), abs(sin(frameCount * 0.01)), abs(sin(frameCount * 0.01)));
    sleep_zzz_vector();
    pop();
  }
}

function yoyo_phase1(time){
  push();
  body();
  //face();

  glasses();
  if (time < 3){
    closed_eyes();
  }
  if (time >= 3 && time < 3.5){
    arms();
    eyes();
  }
  if (time >= 3.5 && time < 5){
    arms();
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
    translate(-4+ sin(frameCount * 0.07)*0.5, -11.5, 9);
    sphere(0.5);
    pop(); 
    
    //right pupil  
    fill(255,255,255);
    push();
    translate(4.6+ sin(frameCount * 0.07)*0.5, -11.5, 9);
    sphere(0.5);
    pop();
  }
  if (time < 4 ){
     closed_mouth();
  }  
  if (time >= 4 && time < 8.5){
     sad_mouth();
  }
  brows();
  bow();
  
  if (time >= 5){
    eyes();
    arms();
  }
  pop();
}

function yoyo_phase2(){

  push();  
  if (time < 7){
    let yoyo_axis = createVector (0.0, 1.0, 0.0);
    rotate (time *0.1, yoyo_axis);
    //rotateY(sin(frameCount * 0.01));
    sad_yoyo();
  }
  
  if (time >=7){
    push();
    rotateY(sin(701 * 0.01));
    translate(  yoyo_x_pos , abs(sin(frameCount * 0.1)),yoyo_z_pos);
    sad_yoyo();
    pop();
    yoyo_x_pos = yoyo_x_pos + 0.3; 
    yoyo_z_pos = yoyo_z_pos + 0.3;
    //console.log(frameCount);
  }
  
  pop();
}
function yoyo_phase3(){
  if (time >= 8.5 && time < 11){
    push();
    rotateY(sin(701 * 0.01));
    translate(  yoyo_x_pos1 , abs(sin(frameCount * 0.1)),yoyo_z_pos1);
    sad_yoyo_pos2();
    pop();
    yoyo_x_pos1 = yoyo_x_pos1 + 0.3; 
    yoyo_z_pos1 = yoyo_z_pos1 + 0.3; 
  }
  
  if (time >= 12 && time < 13.3){
    push();
    rotateY(1);
    translate(-65 + yoyo_x_pos2 , 3+ abs(sin(frameCount * 0.1)),-60 + yoyo_z_pos2);
    //translate(-40,3,10);
    scale(0.8,0.8,0.8);
    yoyo();
    pop();
    yoyo_x_pos2 = yoyo_x_pos2 + 0.3; 
    yoyo_z_pos2 = yoyo_z_pos2 + 0.5; 
    //console.log(frameCount,yoyo_x_pos2,yoyo_z_pos2 );
  }
  if (time >= 13.3){
    push();
    rotateY(1);
    translate(-65 + 38 , 3+ abs(sin(1330 * 0.1)),-60 +65 );
    scale(0.8,0.8,0.8);
    body();
    face();
    bow();
    rotate_arms(time);
    pop();
  }
}

function bobo_movement(time){
  if (time >= 10.5 && time < 13.30){
    push();
    rotateY(-0.7);
    scale(0.8,0.8,0.8);
    bobo();
    pop();
  }  
  if (time >= 13.30){
    push();
    rotateY(-0.7);
    scale(0.8,0.8,0.8);
    translate(40,4,0);
    bobo_body();
    bobo_eyes();
    rotate_arms(time);
    mouth();
    bobo_brows();
    pop();
  }


}

/*
  THIS IS THE JAVASCRIPT FILE THAT CONTAINS ALL THE CODE REQUIRED TO RUN WITH THE HTML FILE AND BELOW YOU CAN SEE SOME VARIABLE DEFINITIONS TO BE USED LATER IN THE CODE
*/

let angle;

let angleV = 0;
let angleA = 0;

let bob;
let len;
let origin;

let gravity = 10;
let timer = 0; // modified
let ele = document.getElementById('timer');
let sec = 1;
let min = 0;

// THIS FUNCTION CREATES A TIMER AND STARTS 
function startTimer() {  
    if (sec < 10) {
      ele.innerHTML = '0' + min + ':0'+ sec ;
    } else if (sec >= 10) {
      ele.innerHTML = '0' + min + ':'+ sec ;
    }
    if (sec >= 59) {
      sec = 0;
      min++;
    }
    sec++;
  }

(function (){
  timer = setInterval(startTimer, 1000) // each increment by 1 second
})() 

// SETS UP THE PENDULUM, ANGLE OF THE SWING, AND LENGTH OF THE STRING
function setup() {
  createCanvas(600, 600); // creates the canvas where the pendulum will be placed
  origin = createVector(300, 0); // creates the pendulum
  angle = PI / 4;
  bob = createVector();
  len = 150; // pendulum length
}

// DRAWS THE PENDULUM ON THE CANVAS

function draw() {
  background(0);

  let force = gravity * sin(angle); //(F= -gsin(theta)) formula
  angleA = (-0.1 * force) / len;
  angleV += angleA;
  angle += angleV;


  bob.x = len * sin(angle) + origin.x; 
  bob.y = len * cos(angle) + origin.y;

  // PENDULUM OBJECT SIZE, FILL, AND PLACEMENT
  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 60);
}
// CREATES A START:PAUSE BUTTON FOR THE TIMER
function startstop(){
    clearInterval(timer);
  
    let myBtn = document.getElementById("btn");
    console.log( myBtn.value );
    if( myBtn.innerText === "pause")
      myBtn.innerHTML="start";
    else {
      myBtn.innerHTML="pause";
      timer = setInterval(startTimer, 1000) // each increment by 1 second
    }
      
}
// CREATES GRAVITY SLIDER TO CHANGE GRAVITY
function changeGravity() {
  var slider = document.getElementById("gravity");
  gravity = slider.value;
}


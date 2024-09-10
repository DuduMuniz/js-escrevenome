function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(600, 600);
   background("black");
}


function draw() {
  
  stroke ("blue");
  fill ("white");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}
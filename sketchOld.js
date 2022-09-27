

let h;
let t;
let w;
let dMax;
let started = false;
let count = 0;
let translationX = 0;
let nloop = 0;

let shrinkX = 300 ;

let begin = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  frameRate(60);

  h = windowHeight/12;
  w = h;
  noLoop()
}

function mouseClicked(){
  loop()
  if (shrinkX > windowWidth - shrinkX && !started){
    dMax = shrinkX;
    started = true;
  }

  else{
    dMax =  windowWidth - shrinkX;
    started = false;
  }



}
function draw() {
  if(isLooping()){

    let d;
    let yStart = h;
    noStroke();
    fill(0);

    if (frameCount > shrinkX - 100)
      w++

      


    if(count*2 >= w ){

      if (translationX == -h){
        translationX = 0;

      }
        
      else{
        
        translationX = -h

      }

      count = 0;
      nloop++
    }
    
          
    translate(frameCount*2 - 4,translationX);
    while(yStart < windowHeight + h){

      rect(0,yStart,2,h);

      yStart += h*2;
      count = frameCount - h/2 * nloop;
      console.log(count);
    }
  }


  
}

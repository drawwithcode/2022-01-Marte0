// click on the screen to create an abstract art piece based on Moving Squares by Bridget Riley.
// the shrinked part is located when you clicked 




let h; //height of the single square
let w; //width of the single square
let count = 0; //count for shifting next column up or down
let translationY = 0; 
let nloop = 0;
let countRestore = 0; 
let enlarge = false;
let click = false; // make sure that the instructions in the mouseClicked function are executed only the first time you click the screen
let shrinkAdjust = false;

let shrinkX = 0 ; //the center of the square shrinking

function setup() { //setting up a white canvas having with the same size of the window
  createCanvas(windowWidth, windowHeight);
  background("white");
  textSize(32);
  textAlign(CENTER);
  text('click anywhere', windowWidth/2, windowHeight/2);

  h = height/12; // setting the height of each square
  w = h; // setting the initial width of th each square
  noLoop() // the draw function doesn't loop
}

function mouseClicked(){
    if(!click){
        click = true;
        background("white");
        shrinkX = mouseX; // save the mouse position when clicked
        loop() // the draw function starts when the mouse is clicked
        
        console.log("shrinkX---,",shrinkX)

        console.log("offset shrink", )
    }
}
function draw() {
  if(isLooping()){

    let yStart = h;
    noStroke(); // setting the style of the narrow rectangles that, shifting thanks to the translate function, will create the squares
    fill(0); 

    if (frameCount > shrinkX/2 - map(140, 0, 866, 0,windowHeight)  && !enlarge){ // where to start the shrinking process, making x = shrinkX, be the centre of the shrinking (I use the map function because shifting the shrinked part by 140 if the height is 866 works, and the map function allaw me to make a proportion)
        
        if(shrinkX/2  < map(140, 0, 866, 0,windowHeight) && !shrinkAdjust){ // this if() make the shrink be where you click even if is too close to the window left edge
          w -= 0.5* (map(140, 0, 866, 0,windowHeight) - shrinkX/2 )
          shrinkAdjust = true;
        }

        w -= 0.5;
        if (w <= 2 ) 
        enlarge = true;
    }
        
    if(enlarge && w <= h) // when w reach 1 the shringking process ends and the enlarging process begin, but it ends when w reach the h value, making the lines return to create squares 
        w += 0.5

    if(count*2 >= w ){ // change traslationY to shift up or down the square column

      if (translationY == -h)
        translationY = 0;
        
      else   
        translationY = -h

      count = 0;
      countRestore += w;
    }
             
    translate((frameCount-2)*2,translationY); // shift the column of narrow rectangles as the framecount rise, when the square is drawn shift up or the rectangles line 
    while(yStart < windowHeight + h){ //draw the column of narrow rectangles

      rect(0,yStart,2,h);

      yStart += h*2;
      count = frameCount - countRestore/2;  // rise as the frame count do, but is restored to 0 when a rectangle row is drawn;

    }
  } 
  
  if(frameCount*2 - 2 >= windowWidth){ // stop looping when the drawing reach the right edge of the window
    noLoop();
    console.log("fin");
    //saveCanvas('cover');

  }
    

}

// all the *2 and /2 speed up the drawing process
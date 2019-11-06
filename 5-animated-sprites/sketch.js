// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var dude;
var dudeY;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  dude = loadAnimation('sprites/dude001.png', 'sprites/dude009.png');

}

function setup() {
  createCanvas(800, 600);
  dudeY = 0
}

function draw() {
  background(169, 232, 245);


  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(dude, 300, dudeY++);


}

function KeyPressed (){
this.y = 100

}

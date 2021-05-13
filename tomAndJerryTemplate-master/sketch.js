
var bgimg;
var cat;
var mouse;
var catimg1, catimg2;
var mouseimg1, mouseimg2;

function preload() {
    //load the images here
    bgimg = loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png");
    mouseimg1 = loadAnimation("mouse1.png");
    catimg2 = loadAnimation("cat2.png", "cat3.png");
    mouseimg2 = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(100, 700);
    mouse = createSprite(900, 700);
    cat.addAnimation("cat", catimg1)
    mouse.addAnimation("mouse",mouseimg2)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keycode === RIGHT_ARROW) {
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25;
    }

    if (keycode === LEFT_ARROW) {
        cat.addAnimation("catWalking", catimg2);
        cat.changeAnimation("catWalking")
        cat.frameDelay = 25;
    }

}

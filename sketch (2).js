var canvas;
var music;
var blue,green,pink,yellow;
function preload(){
    music = loadSound("music.mp3");
    createEdgeSprites();
}


function setup(){
    canvas = createCanvas(800,600);

    blue=createSprite(700,570,170,20);
    blue.shapeColor="blue";
    green=createSprite(500,570,170,20);
    green.shapeColor="green";
pink=createSprite(300,570,170,20);
pink.shapeColor="pink";
yellow=createSprite(100,570,170,20);
yellow.shapeColor="yellow";

    box=createSprite(random(20,750));
    box.velocityX=5;
    box.velocityY=5;
    box.bounceOff(edges);

}

function draw() {
    background(rgb(169,169,169));
    



    //add condition to check if box touching surface and make it box
    drawSprites();
}

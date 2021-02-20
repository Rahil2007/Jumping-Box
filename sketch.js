var canvas;
var music;
var movingBox
var box1,box2,box3,box4
var edge1,edge2,edge3,edge4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    edge1=createSprite(0,300,10,600);
    edge2=createSprite(800,300,10,600);
    edge3=createSprite(400,0,800,10);
    edge4=createSprite(400,600,800,10);

    edge1.visible=false
    edge2.visible=false
    edge3.visible=false
    edge4.visible=false

    //create box sprite and give velocity
    movingBox=createSprite(Math.round(random(50,750)),100,30,30)
    movingBox.shapeColor="white"
    movingBox.velocityX=Math.round(random(2,5))
    movingBox.velocityY=Math.round(random(2,5))

    box1=createSprite(100,550,175,20)
    box1.shapeColor="red"
    box2=createSprite(300,550,175,20)
    box2.shapeColor="green"
    box3=createSprite(500,550,175,20)
    box3.shapeColor="lime"
    box4=createSprite(700,550,175,20)
    box4.shapeColor="blue"
}


function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite

    bounceOff(movingBox,edge1);
    bounceOff(movingBox,edge2);
    bounceOff(movingBox,edge3);
    bounceOff(movingBox,edge4);



    //add condition to check if box touching surface and make it box
    if(isTouching(movingBox,box1)){
        movingBox.shapeColor="red"
        bounceOff(movingBox,box1)
    }

    if(isTouching(movingBox,box2)){
        movingBox.velocityX=0
        movingBox.velocityY=0
        movingBox.shapeColor="green"
    }

    if(isTouching(movingBox,box3)){
        movingBox.shapeColor="lime"
        bounceOff(movingBox,box3)
    }

    if(isTouching(movingBox,box4)){
        music.play();
        movingBox.shapeColor="blue"
        bounceOff(movingBox,box4)
    }

}

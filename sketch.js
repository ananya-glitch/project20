var cat, catImg1, catImg2, catImg3; 
var mouse, mouseImg1, mouseImg2, mouseImg3; 
var bg, bgImg; 
function preload() {
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat2.png");
    catImg2 = loadImage("images/cat4.png");
    catImg3 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse3.png");
    mouseImg  = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    bg = createSprite(500,400); 
    bg.addImage("bg", bgImg)
    cat = createSprite(850, 620);
    cat.addImage("catstart", catImg1);

    cat.scale = 0.2

    mouse = createSprite(180, 620);

    mouse.addImage("mousestart", mouseImg1); 
  
    mouse.scale = 0.2; 
}

function draw() {

    background("pink");
    fill("black")

  

    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){ 
    
        cat.addAnimation("catsomething", catImg2) 
        cat.changeAnimation("catsomething", catImg2)
        cat.scale = 0.2
        cat.velocityX = 0; 
        cat.x = 288;
        mouse.addAnimation("mousesomething", mouseImg2)
        mouse.changeAnimation("mouseomething", mouseImg2)
        mouse.scale = 0.2

    }
    else { 
        cat.addAnimation("catstart", catImg1);
        mouse.addAnimation("mousestart", mouseImg1); 

    }

    if(keyDown("left")){ 
        cat.velocityX = -4; 
    }

 
    drawSprites();
    text("X" + mouseX + "," + "Y" + mouseY, mouseX, mouseY);


}


/*function keyPressed(){ 
    if(keyDown("left")){ 
        cat.velocityX = -4; 
        cat.addAnimation("catsomething", catImg2) 
        cat.changeAnimation("catsomething", catImg2)
        cat.scale = 0.2
        mouse.addAnimation("mousesomething", mouseImg2)
        mouse.changeAnimation("mouseomething", mouseImg2)
        mouse.scale = 0.2

    }
    
}*/


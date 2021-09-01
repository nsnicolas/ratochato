var grama,gramaImg;
var cat,catImg1,catImg2,catImg3,catImg4;
var rato,ratoImg1,ratoImg2,ratoImg3,ratoImg4;
function preload() {
    //carregue as imagens aqui
    gramaImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png",);
    catImg3 = loadAnimation("images/cat4.png");
    ratoImg1 = loadAnimation("images/mouse1.png")
    ratoImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    ratoImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    rato = createSprite(200,600)
    rato.addAnimation("rato1",ratoImg1)
    rato.scale = 0.15

    cat = createSprite(870,600)
    cat.addAnimation("cat1",catImg1)
    cat.scale = 0.220
}

function draw() {

    background(gramaImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x - rato.x < (cat.width - rato.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("gatomiau",catImg3);
        cat.changeAnimation("gatomiau");
        cat.x =300;
        cat.scale = 0.2;

        rato.addAnimation("rato3",ratoImg3)
        rato.changeAnimation("rato3")
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
if(keyCode===LEFT_ARROW){
    rato.addAnimation("rato2",ratoImg2)
    rato.changeAnimation("rato2")
    rato.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation("gatochato",catImg2)
    cat.changeAnimation("gatochato")

}

}

let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let vxBolinha = 5;
let vyBolinha = 5;
let raio = diametro /2;
let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;

function setup() {
    createCanvas(600, 400);

  }
  
  function draw() {
    background(0);
    CriarBolinha();
    MoverRaquete();

  function CriarBolinha(){
    circle(xBolinha,yBolinha,diametro);
    xBolinha += vxBolinha;
    yBolinha += vyBolinha;
  }
   

    if(xBolinha + raio > 600 || xBolinha -raio < 0){
        vxBolinha *= -1;

    }
    if(yBolinha + raio > 400 || yBolinha -raio < 0){
        vyBolinha *= -1;

    }


    function MoverRaquete(){
    rect(xRaquete,yRaquete, comprimentoRaquete, larguraRaquete);
    
    if(keyIsDown(UP_ARROW) === true){
        yRaquete -= 10;
    }

    if(keyIsDown(DOWN_ARROW) === true){
        yRaquete += 10;
    }

    }
  }

  


  
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let vxBolinha = 5;
let vyBolinha = 5;
let raio = diametro / 2;
let xRaquete = 10;
let yRaquete = 150;
let compRaquete = 10;
let largRaquete = 100;
let meusPontos = 0;  
let pontosDoOponente = 0;  

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    CriarBolinha();
    VerificarColisaoBorda();
    MoverRaquete();
    MoverRaqueteOponente();
    VerificarColisaoRaquete();
    incluiPlacar();
}

function CriarBolinha() {
    circle(xBolinha, yBolinha, diametro);
    xBolinha += vxBolinha;
    yBolinha += vyBolinha;
}

function VerificarColisaoBorda() {
    if (xBolinha + raio > width) {
        meusPontos++;
        resetBolinha();
    }
    if (xBolinha - raio < 0) {
        pontosDoOponente++;
        resetBolinha();
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vyBolinha *= -1; 
    }
}

function MoverRaquete() {
    rect(xRaquete, yRaquete, compRaquete, largRaquete);

    if (keyIsDown(UP_ARROW) && yRaquete > 0) {
        yRaquete -= 10; 
    }
    if (keyIsDown(DOWN_ARROW) && yRaquete < height - largRaquete) {
        yRaquete += 10; 
    }
}

function MoverRaqueteOponente() {
    rect(xRaquete, yRaquete, compRaquete, largRaquete);

    if (keyIsDown(UP_ARROW) && yRaquete > 0) {
        yRaquete -= 10; 
    }
    if (keyIsDown(DOWN_ARROW) && yRaquete < height - largRaquete) {
        yRaquete += 10; 
    }
}

function VerificarColisaoRaquete() {
    if (xBolinha - raio < xRaquete + compRaquete && 
        yBolinha > yRaquete && 
        yBolinha < yRaquete + largRaquete) {
        vxBolinha *= -1; 
    }
}

function incluiPlacar() {
    fill(255);
    textSize(32);
    text(meusPontos, 278, 50); 
    text(pontosDoOponente, 321, 50);
}

function resetBolinha() {
    xBolinha = width / 2;
    yBolinha = height / 2;
    vxBolinha = -vxBolinha; 
    vyBolinha = 5;
}

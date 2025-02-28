let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let vxBolinha = 5;
let vyBolinha = 5;
let raio = diametro / 2;
let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;
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
        pontosDoOponente++;
        resetBolinha();
    }
    if (xBolinha - raio < 0) {
        meusPontos++;
        resetBolinha();
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vyBolinha *= -1; 
    }
}

function MoverRaquete() {
    rect(xRaquete, yRaquete, comprimentoRaquete, larguraRaquete);

    if (keyIsDown(UP_ARROW) && yRaquete > 0) {
        yRaquete -= 10; 
    }
    if (keyIsDown(DOWN_ARROW) && yRaquete < height - larguraRaquete) {
        yRaquete += 10; 
    }
}

function VerificarColisaoRaquete() {
    if (xBolinha - raio < xRaquete + comprimentoRaquete && 
        yBolinha > yRaquete && 
        yBolinha < yRaquete + larguraRaquete) {
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

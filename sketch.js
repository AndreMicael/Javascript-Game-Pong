//Variáveis posição bolinha
let xBolinha = 400
let yBolinha = 250

//Variáveis velocidade bolinha
let xVelocidade = 6
let yVelocidade = 6

//Variáveis tamanho da bolinha
let diametro = 15
let raio = diametro / 2

//Variáveis posição raquete
let xRaqueteJog = 10
let yRaqueteJog = 200
let raqueteComprimento = 10
let raqueteAltura = 85
let raqueteAltura2 = 85

//Variáveis posição raquete
let xRaqueteAd = 800-20
let yRaqueteAd = 200
let velocidadeAd 

let colidiu = false


//Sons do jogo
let raquetada 
let ponto
let trilha

//Pontuação
let pontosJog = 0
let pontosAd = 0

//Função para criar tela
function setup() {
  createCanvas(800, 500)
  trilha.loop()
}

//Função desenho
function draw() {
  background(0);
  
  mostraBolinha() //mostra a bolinha
  moveBolinha () // move a bolinha
  colisaoBorda() //verifica colisão com a borda
  mostraRaquete (xRaqueteJog,yRaqueteJog,raqueteAltura2,fill(color(255, 140, 0)))
  mostraRaquete (xRaqueteAd,yRaqueteAd,raqueteAltura,fill(color(255,255,255)))
  movimentoRaquete()
  colisaoRaquete (xRaqueteJog,yRaqueteJog,raqueteAltura2) 
  colisaoRaquete (xRaqueteAd,yRaqueteAd,raqueteAltura) 
  movimentoRaqueteAd()
  incluiPlacar()
  marcaPonto ()
 
  


  
    
}





function mostraBolinha () {
  
  circle(xBolinha,yBolinha,diametro)
  
}

function moveBolinha () {
  
  xBolinha += xVelocidade
  yBolinha += yVelocidade
  
}

function colisaoBorda () {
  
   if (xBolinha + raio > width || xBolinha - raio < 0) {
    
    xVelocidade *= -1
  }
  
  if (yBolinha + raio > height || yBolinha -raio < 0) {
    
    yVelocidade *= -1
  }
  
}
function mostraRaquete (x,y,z,c){
  
  rect(x,y,raqueteComprimento,z)
  c
  
}
function movimentoRaquete() {
  if (keyIsDown(UP_ARROW)){
    
    yRaqueteJog -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    
    yRaqueteJog += 10;
  }
  
  if (keyIsDown(LEFT_ARROW)){
    
    xRaqueteJog -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)){
    
    xRaqueteJog += 10;
  }
  


    
}
function keyPressed() {
  if (keyCode === 87) {
    raqueteAltura2 *= 3
} 
  if (keyCode === 83) {
    raqueteAltura2 /= 3
} 
  
  if(keyCode === 32){
    
    xRaqueteJog = 10
    yRaqueteJog = 200
    
  }
  
}
function movimentoRaqueteAd() {
  
  velocidadeAd = yBolinha - yRaqueteAd - raqueteComprimento / 2 - 100
  
  yRaqueteAd += velocidadeAd
  
}
function colisaoRaquete (x,y,z) {
  
  colidiu = collideRectCircle(x, y, raqueteComprimento, z, xBolinha, yBolinha, raio)
  
  if (colidiu == true) {
    
    xVelocidade *= -1
    raquetada.play()
    
  }  
  
}
function incluiPlacar (){
  stroke(255)
  textSize(16)
  fill(color(255,140,0)) 
  rect(334,30, 40,20)
  fill(255)
  text(pontosJog, width/2 -50 ,45 )
  fill(color(255,140,0))
  rect(434,30, 40,20)
  fill(255)
  text(pontosAd, width/2 +50,45 )
  text('x',width/2,45)
  
 
   
  
}
function marcaPonto (){
  
  if (xBolinha > 791) {
    
    pontosJog += 1
    ponto.play()
  }
  
  
   
  if (xBolinha <9) {
    
    pontosAd += 1
    ponto.play()
  }
  
}

function preload(){
  
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  
}

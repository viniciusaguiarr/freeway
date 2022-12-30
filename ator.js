let xAtor = 100;
let yAtor = 366;
let colisao = false
let pontuacao = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5
  }
  if (keyIsDown(DOWN_ARROW)){
    if (posicaoMinima())
   yAtor += 5 
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      resetaAtor();
      somColisao.play();
     if (pontuacaoMinima())
      pontuacao -= 1;
    }
  }
}
function resetaAtor(){
  yAtor = 366
}

function incluiPontos(){
  fill(255,200,60)
  textAlign(CENTER);
  textSize(25);
  text(pontuacao, width / 5, 27)
}

function marcaPonto(){
  if (yAtor < 15) {
    somPonto.play();
    pontuacao += 1;
    resetaAtor();
  }
}

function pontuacaoMinima(){
  return pontuacao > 0
}

function posicaoMinima(){
  return yAtor < 366;
}






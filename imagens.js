//IMAGENS E SONS DO JOGO
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let trilhaSonora;
let somColisao
let somPonto

function preload(){
  imagemDaEstrada = loadImage("IMAGENS/estrada.png")
  imagemDoAtor = loadImage("IMAGENS/ator-1.png")
  imagemCarro = loadImage("IMAGENS/carro-1.png")
  imagemCarro2 = loadImage("IMAGENS/carro-2.png")
  imagemCarro3 = loadImage("IMAGENS/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3")
  somPonto = loadSound("sons/pontos.wav")
}

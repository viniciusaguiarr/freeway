function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  resetaCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
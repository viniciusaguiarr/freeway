// codigo do carro
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let vCarros = [6, 7 ,5, 9, 4, 3]
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= vCarros[i]  
  }
  
}

function resetaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
  if (passouATela(xCarros[i])){
    xCarros[i]= 600;  
    }
  }
}

function passouATela(xCarro){
  return xCarro < -35
}
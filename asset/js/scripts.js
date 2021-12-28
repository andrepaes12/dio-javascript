//console.log('Output console.log!');

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var btnDiminuir = document.getElementById('subtrair').style
var btnAdicionar = document.getElementById('adicionar').style

btnDiminuir.opacity = 0.5;
btnDiminuir.cursor = 'not-allowed';
btnAdicionar.opacity = 1.0;
btnAdicionar.cursor = 'pointer';

document.getElementById('adicionar').addEventListener('click', increment);
document.getElementById('subtrair').addEventListener('click', decrement);


function increment(){
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    btnDiminuir.opacity = 1.0;
    btnDiminuir.cursor = 'pointer';
    currentNumberWrapper.style.color = 'black';
  }
  if (currentNumber == 10) {
    btnAdicionar.opacity = 0.5;
    btnAdicionar.cursor = 'not-allowed';
    currentNumberWrapper.style.color = 'blue';
  }
}

function decrement(){
  if (currentNumber > 0) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    btnAdicionar.opacity = 1.0;
    btnAdicionar.cursor = 'pointer';
    currentNumberWrapper.style.color = 'black';
  }  
  if (currentNumber == 0){
    btnDiminuir.opacity = 0.5;
    btnDiminuir.cursor = 'not-allowed';
    currentNumberWrapper.style.color = 'red';
  }
}
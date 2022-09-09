const firstDiv = document.querySelector(".first-step");
const secondDiv = document.querySelector(".second-step");
const finalDiv = document.querySelector(".final-step");


function go(currentStep, nextStep) {
  let dNone, dBlock;
  if (currentStep == 1) {
    dNone = firstDiv;
  } else if (currentStep == 2) {
    dNone = secondDiv;
  } else {
    dNone = finalDiv;
  }
  dNone.style.display = "none";

  if (nextStep == 1) {
    dBlock = firstDiv;
  } else if (nextStep == 2) {
    dBlock = secondDiv;
  } else {
    dBlock = finalDiv;
  }
  dBlock.style.display = "block";
}

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");


function validate() {
  peso.style.border = "none";
  altura.style.border = "none";
  if (!peso.value || !altura.value) {
    if (!peso.value && !altura.value) {
      peso.style.border = "1px solid red";
      altura.style.border = "1px solid red";
    } else if (!peso.value) {
      peso.style.border = "1px solid red";
    } else {
      altura.style.border = "1px solid red";
    }
    return false;
  }
  return true;
}

const result = document.getElementById("resultado");

function classificaoIMC() {
  let imc = peso.value / (altura.value * altura.value);
  result.innerHTML = `Seu IMC é ${imc.toFixed(2)} <br>`;

  if (imc < 18.5) {
    result.innerHTML += "Magreza | Grau de Obesidade 0";
    result.style.color = "yellow";
  } else if (imc >= 18.5 && imc <= 25) {
    result.innerHTML += "Normal |Grau de Obesidade 0";
    result.style.color = "green";
  } else if (imc >= 25 && imc < 30) {
    result.innerHTML += "Sobrepeso | Grau de  Obesidade I";
    result.style.color = "yellow";
  } else if (imc >= 30 && imc < 40) {
    result.innerHTML += "Obesidade | Grau de Obesidade II";
    result.style.color = "red";
  } else {
    result.innerHTML += "Obesidade Grave |Grau de  Obesidade III";
    result.style.color = "black";
  }
  go(2, 3);
}

function main() {
  if (validate()) classificaoIMC();
}

function limpar(){
 peso.value = " ";
 altura.value = " ";
}
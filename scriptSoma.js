
const cabelo = 30;
const barba = 20;
const descolorir = 50;
const sobrancelha = 20;

const cbxCabelo = document.querySelector('#cabelo')
const cbxBarba = document.querySelector('#barba')
const cbxSobrancelha = document.querySelector('#sobrancelha')
const cbxDescolorir = document.querySelector('#descolorir')
const valor = document.querySelector('#valor')

let total = 0;
valor.innerText = total;


cbxCabelo.addEventListener("change", (e) => {
    if (e.target.checked) {
        total += cabelo
        valor.innerText = total;
    } else {
        total -= cabelo
        valor.innerText = total;
    }
  });

  cbxBarba.addEventListener("change", (e) => {
    if (e.target.checked) {
        total += barba
        valor.innerText = total;
    } else {
        total -= barba
        valor.innerText = total;
    }
  });

  cbxSobrancelha.addEventListener("change", (e) => {
    if (e.target.checked) {
        total += sobrancelha
        valor.innerText = total;
    } else {
        total -= sobrancelha
        valor.innerText = total;
    }
  });

  cbxDescolorir.addEventListener("change", (e) => {
    if (e.target.checked) {
        total += descolorir
        valor.innerText = total;
    } else {
        total -= descolorir
        valor.innerText = total;
    }
  });

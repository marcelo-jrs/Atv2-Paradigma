
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

function update(preco, e){
    if (e.target.checked) {
        total += preco
        valor.innerText = total;
    } else {
        total -= preco
        valor.innerText = total;
    }
}


cbxCabelo.addEventListener("change", (e) => {
    update(cabelo, e)
  });

  cbxBarba.addEventListener("change", (e) => {
    update(barba, e)
  });

  cbxSobrancelha.addEventListener("change", (e) => {
    update(sobrancelha, e)
  });

  cbxDescolorir.addEventListener("change", (e) => {
    update(descolorir, e)
  });

class Compra {

    constructor() {
        this.total = 0
    }

}

class Produtos {

    constructor(){
        this.cabelo = 30;
        this.barba = 20;
        this.descolorir = 50;
        this.sobrancelha = 20;
    }
}

var produtos = new Produtos()
var compra = new Compra()



const cbxCabelo = document.querySelector('#cabelo')
const cbxBarba = document.querySelector('#barba')
const cbxSobrancelha = document.querySelector('#sobrancelha')
const cbxDescolorir = document.querySelector('#descolorir')
const valor = document.querySelector('#valor')

function update(preco, e){
    if (e.target.checked) {
        compra.total += preco
        valor.innerText =  compra.total;
    } else {
        compra.total -= preco
        valor.innerText =  compra.total;
    }
}

cbxCabelo.addEventListener("change", (e) => {
    update(produtos.cabelo, e)
  });

  cbxBarba.addEventListener("change", (e) => {
    update(produtos.barba, e)
  });

  cbxSobrancelha.addEventListener("change", (e) => {
    update(produtos.sobrancelha, e)
  });

  cbxDescolorir.addEventListener("change", (e) => {
    update(produtos.descolorir, e)
  });

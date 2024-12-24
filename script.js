// chamando todo mundo nas variáveis
const selectReal = document.querySelector("#real");
const selectDolarEuro = document.querySelector("#dolar-euro");
const selectDolar = document.querySelector("#dolar");
const selectEuro = document.querySelector("#euro");
const selectLibra = document.querySelector("#libra");
const selectBitcoin = document.querySelector("#bitcoin");
const botaoConverter = document.querySelector("button");
const inputValor = document.querySelector("input");

const resultadoReal = document.querySelector(".resultado-real");

const imageDolarEuro = document.querySelector(".img-eua-euro");
const dolarEuroParagrafo = document.querySelector(".p-eua-euro");
const resultadoDolarEuro = document.querySelector(".resultado-eua-euro");

// definindo o valor das moedas DÓLAR e EURO (de hoje)
selectDolar.value = 6.15;
selectEuro.value = 6.38;
selectLibra.value = 7.76;
selectBitcoin.value = 608219;

//
selectDolarEuro.addEventListener("change", (changeSelect) => {
    if (selectDolarEuro.value === selectDolar.value) {
        imageDolarEuro.src = "images/estados-unidos (1) 1.png"
        dolarEuroParagrafo.textContent = "Dólar Americano"
        resultadoDolarEuro.innerHTML = `US$ ${(Number((inputValor.value / parseFloat(selectDolar.value)).toFixed(2))).toLocaleString('en-US')}`
    } 
    
    else if (selectDolarEuro.value === selectEuro.value) {
        imageDolarEuro.src = "images/euro.png"
        dolarEuroParagrafo.textContent = "Euro"
        resultadoDolarEuro.innerHTML = `€ ${(Number((inputValor.value / parseFloat(selectEuro.value)).toFixed(2))).toLocaleString('de-DE')}`
    } 
    
    else if (selectDolarEuro.value === selectLibra.value) {
        imageDolarEuro.src = "images/libra.png"
        dolarEuroParagrafo.textContent = "Libra"
        resultadoDolarEuro.innerHTML = `£ ${(Number((inputValor.value / parseFloat(selectLibra.value)).toFixed(2))).toLocaleString('en-GB')}`
    }
    
    else if (selectDolarEuro.value === selectBitcoin.value) {
        imageDolarEuro.src = "images/bitcoin.png"
        dolarEuroParagrafo.textContent = "Bitcoin"
        resultadoDolarEuro.innerHTML = `₿ ${(Number((inputValor.value / parseFloat(selectBitcoin.value)).toFixed(8))).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })}`
    }
    
    else {
        resultadoDolarEuro.innerHTML = "Erro"
    }
})

//
botaoConverter.addEventListener("click", (conversao) => {
    resultadoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor.value)
    
    if (selectDolarEuro.value === selectDolar.value) {
        resultadoDolarEuro.innerHTML = `US$ ${(Number((inputValor.value / parseFloat(selectDolar.value)).toFixed(2))).toLocaleString('en-US')}`
    } 
    
    else if (selectDolarEuro.value === selectEuro.value) {
        resultadoDolarEuro.innerHTML = `€ ${(Number((inputValor.value / parseFloat(selectEuro.value)).toFixed(2))).toLocaleString('de-DE')}`
    } 

    else if (selectDolarEuro.value === selectLibra.value) {
        resultadoDolarEuro.innerHTML = `£ ${(Number((inputValor.value / parseFloat(selectLibra.value)).toFixed(2))).toLocaleString('en-GB')}`
    }

    else if (selectDolarEuro.value === selectBitcoin.value) {
        resultadoDolarEuro.innerHTML = `₿ ${(Number((inputValor.value / parseFloat(selectBitcoin.value)).toFixed(8))).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })}`
    }

    else {
        resultadoDolarEuro.innerHTML = "Erro"
    }
})
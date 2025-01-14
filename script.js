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
selectLibra.value = 7.76;

console.log(selectDolar.value)

//
botaoConverter.addEventListener("click", async (conversao) => {
    resultadoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor.value)

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    
    if (selectDolarEuro.value === selectDolar.value) {
        resultadoDolarEuro.innerHTML = `US$ ${(Number((inputValor.value / parseFloat(dolar)).toFixed(2))).toLocaleString('en-US')}`
    } 
    
    else if (selectDolarEuro.value === selectEuro.value) {
        resultadoDolarEuro.innerHTML = `€ ${(Number((inputValor.value / parseFloat(euro)).toFixed(2))).toLocaleString('de-DE')}`
    } 

    else if (selectDolarEuro.value === selectLibra.value) {
        resultadoDolarEuro.innerHTML = `£ ${(Number((inputValor.value / parseFloat(selectLibra.value)).toFixed(2))).toLocaleString('en-GB')}`
    }

    else if (selectDolarEuro.value === selectBitcoin.value) {
        resultadoDolarEuro.innerHTML = `₿ ${(Number((inputValor.value / parseFloat(bitcoin)).toFixed(8))).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })}`
    }

    else {
        resultadoDolarEuro.innerHTML = "Erro"
    }
})

//
selectDolarEuro.addEventListener("change", async (changeSelect) => {
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    console.log(data)

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    if (selectDolarEuro.value === selectDolar.value) {
        imageDolarEuro.src = "images/estados-unidos (1) 1.png"
        dolarEuroParagrafo.textContent = "Dólar Americano"
        resultadoDolarEuro.innerHTML = `US$ ${(Number((inputValor.value / parseFloat(dolar)).toFixed(2))).toLocaleString('en-US')}`
    } 
    
    else if (selectDolarEuro.value === selectEuro.value) {
        imageDolarEuro.src = "images/euro.png"
        dolarEuroParagrafo.textContent = "Euro"
        resultadoDolarEuro.innerHTML = `€ ${(Number((inputValor.value / parseFloat(euro)).toFixed(2))).toLocaleString('de-DE')}`
    } 
    
    else if (selectDolarEuro.value === selectLibra.value) {
        imageDolarEuro.src = "images/libra.png"
        dolarEuroParagrafo.textContent = "Libra"
        resultadoDolarEuro.innerHTML = `£ ${(Number((inputValor.value / parseFloat(selectLibra.value)).toFixed(2))).toLocaleString('en-GB')}`
    }
    
    else if (selectDolarEuro.value === selectBitcoin.value) {
        imageDolarEuro.src = "images/bitcoin.png"
        dolarEuroParagrafo.textContent = "Bitcoin"
        resultadoDolarEuro.innerHTML = `₿ ${(Number((inputValor.value / parseFloat(bitcoin)).toFixed(8))).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })}`
    }
    
    else {
        resultadoDolarEuro.innerHTML = "Erro"
    }
})
import formatCurrency from './formatCoin.js';

function returnMessage(valorInicial, tempoMeses, juros, valorJuros, valorFinal){

    let message = `\nValor inicial: ` + formatCurrency(valorInicial) + ` Reais\nTempo em meses: ${tempoMeses} meses\nTaxa de juros: ${juros}% a.m\n\nValor em juros: ` + formatCurrency(valorJuros) + ` Reais\nValor total final: ` + formatCurrency(valorFinal) + ` Reais\n`;

    return console.log(message);
}

export default returnMessage;
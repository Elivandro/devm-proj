function returnFees (valorInicial, juros, tempoMeses){


    let valorJuros = 0.00;
    let valorFinal = 0.00;
    let i = 0;

    while(i < tempoMeses){

        valorJuros += (Number(valorInicial) + Number(valorJuros)) * (Number(juros) / 100);
        i++;

    }

    valorFinal = Number(valorJuros) + Number(valorInicial)    

    return {valorJuros, valorFinal};

}

export default returnFees;
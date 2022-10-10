import readline from "readline-sync";

import returnFees from './components/functions/returnFees.js';
import returnMessage from './components/functions/returnMessage.js';

const titleApp = "\n----------Bem vindo a calculadora de juros Compostos----------";

console.log(titleApp);

const valorInicial = readline.question("- Digite o valor a ser calculado: ");
const juros = readline.question("- Taxa de juros em meses: ");
const tempoMeses = readline.question("- Tempo em meses: ");

if(!valorInicial == '' && !juros == '' && !tempoMeses == ''){
    const {valorJuros, valorFinal} = returnFees(valorInicial, juros, tempoMeses);
    returnMessage(valorInicial, tempoMeses, juros, valorJuros, valorFinal);
}else{
    console.log("\nDigite os valores\n");
}
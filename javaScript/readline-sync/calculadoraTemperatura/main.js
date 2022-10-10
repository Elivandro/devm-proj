import entradaDados from 'readline-sync';
import { 
            retornaCelsius, 
            retornaFahrenheit, 
            retornaKelvin 
        } from './components/function/temperature.js';

        console.log("\n\n ------- Calculdora de conversão de temperatura -------");

        const tempFrom  = entradaDados.question("\nTemperatura de Entrada \n\n1. Celsius  2. Fahrenheit  3. Kelvin  4. Sair da calculadora\n  Unidade de temperatura: ");
        const temp      = entradaDados.question("\nDigite a temperatura a ser convertida: ");
        const tempTo    = entradaDados.question("\nTemperatura de Saída é\n\n1. Celsius  2. Fahrenheit  3. Kelvin\n  Unidade de temperatura: ");

        if(Number(tempFrom) != 1){

            let celsius = retornaCelsius(temp, tempFrom);
            let msg = (tempFrom == 2) ? "ºF é equivalente a " : "K é equivalente a "; 

            console.log("\nA temperatura em " + temp + msg + celsius.toFixed(2) + "Cº\n---------------------\n");

        }else if(Number(tempTo) != 2){

            let fahrenheit = retornaFahrenheit(temp, tempFrom);
            let msg = (tempFrom == 1) ? "Cº é equivalente a " : "K é equivalente a "; 

            console.log("\nA temperatura em " + temp + msg + fahrenheit.toFixed(2) + "ºF\n---------------------\n");

        }else if(Number(tempTo) != 3){

            let kelvin = retornaKelvin(temp, tempFrom);
            let msg = (tempFrom == 2) ? "ºF é equivalente a " : "Cº é equivalente a "; 

            console.log("\nA temperatura em " + temp + msg + kelvin.toFixed(2) + "K\n---------------------\n");

        }else{

            console.log("\nA unidade de temperatura inválida. As temperaturas devem possuir unidades diferentes.\n\n ---------------------\n");

        }

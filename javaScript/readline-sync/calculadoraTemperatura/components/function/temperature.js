function retornaCelsius (temperatura, medida) {

    let celsius;

    if(medida == 2) {

        celsius = (temperatura - 32) * (5 / 9);

    }else{

        celsius = temperatura - 273.15;

    }

    return celsius;
}

function retornaFahrenheit(temperatura, medida){

    let fahrenheit;

    if(medida == 1){

        fahrenheit = (temperatura * 1.8) + 32;

    } else{

        fahrenheit = (temperatura - 273.15) * (9 / 5) + 32;

    }

    return fahrenheit;
}

function retornaKelvin(temperatura, medida){

    let kelvin;

    if(medida == 1){

        kelvin = Number(temperatura) + 273.15;

    }else{

        kelvin = (temperatura - 32) * (5 / 9) + 273.15;

    }

    return kelvin;
}

export { retornaCelsius, retornaFahrenheit, retornaKelvin };
const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}



function celciusToFahrenAndKelvin() {
    const ctemp = parseFloat(celciusInput.value);
    const ftemp = (ctemp * (9/5)) + 32;
    const ktemp = ctemp + 273.15;
    fahrenheitInput.value = roundNum(ftemp);
    kelvinInput.value = roundNum(ktemp);
}


function fahrenToCelciusAndKelvin() {
    const ftemp = parseFloat(fahrenheitInput.value)
    const ctemp = (ftemp-32) * (5/9);
    const ktemp = (ftemp + 459.67) * 5/9;
    celciusInput.value = roundNum(ctemp);
    kelvinInput.value= roundNum(ktemp);
}

function kelvinTocelciusAndfahren() {
    const ktemp = parseFloat(kelvinInput.value)
    const ctemp = ktemp-273.15;
    const ftemp = 9/5 * (ktemp -273) +32;
    celciusInput.value = roundNum(ctemp);
    fahrenheitInput.value = roundNum(ftemp);
}

celciusInput.addEventListener('input', celciusToFahrenAndKelvin);
fahrenheitInput.addEventListener('input', fahrenToCelciusAndKelvin);kelvinInput.addEventListener('input', kelvinTocelciusAndfahren);

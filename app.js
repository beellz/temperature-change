const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

celciusInput.addEventListener('input', function(){
   const ctemp = parseFloat(celciusInput.value);
   const ftemp = (ctemp * (9/5)) + 32;
   const ktemp = ctemp + 273.15;
   fahrenheitInput.value = ftemp;
   kelvinInput.value = ktemp;
})

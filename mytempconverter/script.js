function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultDiv = document.getElementById('result');
    if (tempInput === '') {
        alert('Please enter a temperature.');
        return;
    }
    if (isNaN(tempInput)) {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;

    if (inputUnit === outputUnit) {
        convertedTemp = temperature;
    } else {
        let tempInCelsius;
        if (inputUnit === 'Celsius') {
            tempInCelsius = temperature;
        } else if (inputUnit === 'Fahrenheit') {
            tempInCelsius = (temperature - 32) * 5 / 9;
        } else if (inputUnit === 'Kelvin') {
            tempInCelsius = temperature - 273.15;
        }


        if (outputUnit === 'Celsius') {
            convertedTemp = tempInCelsius;
        } else if (outputUnit === 'Fahrenheit') {
            convertedTemp = (tempInCelsius * 9 / 5) + 32;
        } else if (outputUnit === 'Kelvin') {
            convertedTemp = tempInCelsius + 273.15;
        }
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${outputUnit}`;
}

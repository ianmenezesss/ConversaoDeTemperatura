const temperatura = document.getElementById("temperatura")
const paraFahrenheit = document.getElementById("paraFahrenheit")
const paraCelcius = document.getElementById("paraCelcius")
const resultado = document.getElementById("resultado")

let temp;

function convert(){

    if(paraFahrenheit.checked){
        temp = Number(temperatura.value);
        temp = temp * 9/5 + 32;
        resultado.textContent = temp.toFixed(1) + "°F"
    }   
    else if(paraCelcius.checked){
        temp = Number(temperatura.value);
        temp = (temp - 32) * (5/9)
        resultado.textContent = temp.toFixed(1) + "°C"
    }
    else{
        resultado.textContent = "Selecione a Conversão"
    }
}
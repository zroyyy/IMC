function calcIMC(){
    var peso = document.getElementById('massa').value;
    var altura = document.getElementById('altura').value;
    var IMC = peso/(altura*altura);
    var IMC2 = "";
    var nome = document.getElementById('nome').value;

    if (IMC < 18.5) {
        IMC2 = "Abaixo do peso";
    }
    else if (IMC >= 18.5 && IMC <= 24.9){
        IMC2 = "Peso normal";
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        IMC2 = "Sobrepeso";
    }
    else if (IMC >= 30 && IMC <= 34.9){
        IMC2 = "Obesidade Grau I";
    }
    else if (IMC >= 35 && IMC <= 39.9) {
        IMC2 = "Obesidade Grau II";
    }
    else{
        IMC2 = "Obesidade Grau III ou Mórbida";
    }

    document.getElementById('resultado').textContent = nome + ' seu IMC é igual a: ' + IMC.toFixed(2) + ' e sua classificação é: ' +IMC2;
}
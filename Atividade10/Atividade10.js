function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Magreza (Grau 0)";
  } else if (imc < 25) {
    return "Normal (Grau 0)";
  } else if (imc < 30) {
    return "Sobrepeso (Grau I)";
  } else if (imc < 40) {
    return "Obesidade (Grau II)";
  } else {
    return "Obesidade Grave (Grau III)";
  }
}

function mostrarIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
    return;
  }

  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);

  document.getElementById("resultado").innerText = 
    `IMC: ${imc.toFixed(2)} → ${classificacao}`;
}
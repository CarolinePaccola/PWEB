function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

function mostrarMaior() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const n3 = Number(document.getElementById("num3").value);
  const maior = maiorNumero(n1, n2, n3);
  document.getElementById("resultadoMaior").innerText = "Maior número: " + maior;
}

function ordenarCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

function mostrarCrescente() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const n3 = Number(document.getElementById("num3").value);
  const ordenados = ordenarCrescente(n1, n2, n3);
  document.getElementById("resultadoCrescente").innerText = "Ordem crescente: " + ordenados.join(", ");
}

function ehPalindromo(texto) {
  const str = texto.toUpperCase().replace(/\s+/g, '');
  const reverso = str.split('').reverse().join('');
  return str === reverso;
}

function verificarPalindromo() {
  const texto = document.getElementById("texto").value;
  const resultado = ehPalindromo(texto)
    ? "É um palíndromo!"
    : "Não é um palíndromo.";
  document.getElementById("resultadoPalindromo").innerText = resultado;
}

function tipoTriangulo(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Os valores não formam um triângulo.";
  }
  if (a === b && b === c) {
    return "Triângulo Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Triângulo Isósceles";
  } else {
    return "Triângulo Escaleno";
  }
}

function verificarTriangulo() {
  const a = Number(document.getElementById("lado1").value);
  const b = Number(document.getElementById("lado2").value);
  const c = Number(document.getElementById("lado3").value);
  const resultado = tipoTriangulo(a, b, c);
  document.getElementById("resultadoTriangulo").innerText = resultado;
}
function calcularMedia() {
  let nome = prompt("Digite o nome do aluno:");

  let notas = [];
  for (let i = 1; i <= 4; i++) {
    let nota = parseFloat(prompt("Digite a nota " + i + ":"));
    notas.push(nota);
  }

  let soma = notas.reduce((acc, val) => acc + val, 0);
  let media = soma / notas.length;

  let confirmar = confirm("Deseja ver a média de " + nome + "?");

  if (confirmar) {
    alert("A média do aluno " + nome + " é: " + media.toFixed(2));
  } else {
    alert("Operação cancelada.");
  }
}
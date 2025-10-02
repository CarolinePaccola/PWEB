const moves = ["pedra", "papel", "tesoura"];
const emojis = { pedra: "🪨", papel: "📄", tesoura: "✂️" };

let scoreUser = 0, scoreCpu = 0;

const $ = (sel) => document.querySelector(sel);
const userMoveEl = $("#userMove");
const cpuMoveEl  = $("#cpuMove");
const resultEl   = $("#result");
const scoreEl    = $("#score");

function cpuRandomMove() {
  const r = Math.random(); // 0 <= r < 1
  if (r < 1/3)   return "pedra";
  if (r < 2/3)   return "papel";
  return "tesoura";
}

function decide(user, cpu) {
  if (user === cpu) return "empate";
  const vence = {
    pedra: "tesoura",   
    tesoura: "papel",   
    papel: "pedra"      
  };
  return vence[user] === cpu ? "usuario" : "cpu";
}

function play(userChoice) {
  const cpuChoice = cpuRandomMove();
  userMoveEl.textContent = `${emojis[userChoice]} ${capitalize(userChoice)}`;
  cpuMoveEl.textContent  = `${emojis[cpuChoice]} ${capitalize(cpuChoice)}`;

  const winner = decide(userChoice, cpuChoice);
  if (winner === "empate") {
    resultEl.textContent = "Empate!";
  } else if (winner === "usuario") {
    scoreUser++;
    resultEl.textContent = resultPhrase(userChoice, cpuChoice) + " — Você venceu!";
  } else {
    scoreCpu++;
    resultEl.textContent = resultPhrase(cpuChoice, userChoice) + " — CPU venceu!";
  }
  updateScore();
}

function resultPhrase(ganhador, perdedor) {
  const frases = {
    "pedra,tesoura": "Pedra quebra tesoura",
    "tesoura,papel": "Tesoura corta papel",
    "papel,pedra": "Papel cobre a pedra"
  };
  return frases[`${ganhador},${perdedor}`] || "";
}

function updateScore() {
  scoreEl.textContent = `Placar — Você ${scoreUser} : ${scoreCpu} CPU`;
}

function capitalize(s) { return s[0].toUpperCase() + s.slice(1); }

document.querySelectorAll("button.choice").forEach(btn => {
  btn.addEventListener("click", () => play(btn.dataset.move));
});

$("#reset").addEventListener("click", () => {
  scoreUser = scoreCpu = 0;
  updateScore();
  userMoveEl.textContent = "—";
  cpuMoveEl.textContent  = "—";
  resultEl.textContent   = "Placar zerado. Faça sua jogada!";
});

$("#again").addEventListener("click", () => {
  resultEl.textContent = "Nova rodada. Escolha sua jogada!";
  userMoveEl.textContent = "—";
  cpuMoveEl.textContent  = "—";
});
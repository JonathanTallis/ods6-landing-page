function verificarRespostas() {
  const respostasCorretas = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "c",
    q5: "c",
  };

  let acertos = 0;

  for (let pergunta in respostasCorretas) {
    const respostaSelecionada = document.querySelector(
      `input[name="${pergunta}"]:checked`
    );
    if (
      respostaSelecionada &&
      respostaSelecionada.value === respostasCorretas[pergunta]
    ) {
      acertos++;
    }
  }

  const resultado = document.getElementById("resultado");
  if (acertos === 5) {
    resultado.textContent = `🎉 Incrível! Você acertou todas as 5 perguntas!`;
  } else if (acertos >= 3) {
    resultado.textContent = `Muito bem! Você acertou ${acertos} de 5! Continue assim! 💧`;
  } else {
    resultado.textContent = `Você acertou ${acertos} de 5. Que tal rever algumas dicas e tentar de novo? 😉`;
  }
  resetarQuiz();
}

function resetarQuiz() {
  const respostas = document.querySelectorAll(`input[type="radio"]`);
  respostas.forEach((radio) => (radio.checked = false));
}

const nome = document.querySelector('.text h1');
const nomeCompleto = nome.textContent;
nome.textContent = "";

let i = 0;
const intervalo = setInterval(() => {
  nome.textContent += nomeCompleto[i];
  i++;
  if (i >= nomeCompleto.length) {
    clearInterval(intervalo);
  }
}, 100); 
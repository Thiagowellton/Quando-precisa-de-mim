// Criar e animar corações caindo no fundo
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (10 + Math.random() * 20) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heart.style.opacity = Math.random();

  document.querySelector(".heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Criar o container no body (se não existir)
if (!document.querySelector(".heart-container")) {
  const container = document.createElement("div");
  container.classList.add("heart-container");
  document.body.appendChild(container);
}

// Criar corações a cada 400ms
setInterval(createHeart, 400);

// Validação do login
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "MinhaPreta" && password === "Saudade") {
  errorMessage.textContent = "";
  // Redireciona para a página de boas-vindas
  window.location.href = "welcome.html";
} else {
  errorMessage.textContent = "Usuário ou senha incorretos. Tente novamente.";
}

});
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.textContent = '💖';

  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.fontSize = (Math.random() * 10 + 15) + 'px';
  coracao.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.querySelector('.coracoes-container').appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 300);

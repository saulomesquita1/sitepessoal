// Espera 2 segundos antes de esconder a splash screen
setTimeout(function() {
    var splash = document.getElementById("splash");
    splash.classList.add("hidden");
}, 2000);

// Atualiza a saudação com base no horário atual
var greeting = document.getElementById("greeting");
var horaAtual = new Date().getHours();
if (horaAtual >= 0 && horaAtual < 12) {
    greeting.textContent = "Olá, Bom dia!";
} else if (horaAtual >= 12 && horaAtual < 18) {
    greeting.textContent = "Olá, Boa tarde!";
} else {
    greeting.textContent = "Olá, Boa noite!";
}


if (location.protocol !== "https:") location.protocol = "https:";

var alberta = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
var resultado;
var palavras;
alberta.lang = 'pt-Br';
alberta.interimResults = false;
alberta.maxAlternatives = 1;
alberta.start();
// ||

alberta.onresult = function(event) {
    // Salvar resultado
    resultado = event.results[0][0].transcript;
    // Dividir resultado em palavras
    palavras = resultado.split(' ');
    // Corrigir
    corrigir();
    // Mostrar resultado
    //console.log(resultado);
    document.getElementById('dito').innerHTML = '" ' + resultado + ' "';
    // Outras respostas
    if (resultado == "Obrigado Alberta") {
      albertafala('De nada chefe');
    }
    if (resultado == "Bom dia Alberta") {
      albertafala('Bom dia chefe');
    }
    if (resultado == "Olá Alberta") {
      albertafala('Olá chefe');
    }
    // Se a primeira palavra for alberta
    if (palavras[0] == 'Alberta') {
      // Alberto ativado
      plim.play();
      respostas();
      comandos();
    }
    // fim onresult
  }

alberta.onend = function() {
  alberta.start();
}

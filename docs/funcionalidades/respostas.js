function respostas() {
  // Estas ai?
  if (resultado == "Alberta estás aí") {
    albertafala('Sim estou');
  }
  // Tudo bem?
  if (resultado == "Alberta tudo bem") {
    albertafala('Sim chefe e consigo?');
  }
  // Como te chamas?
  if (resultado == "Alberta como te chamas" || resultado == "Alberta como é que te chamas" || resultado == "Alberta qual é o teu nome") {
    albertafala('O nome que o chefe me deu é Alberta');
  }
  // Onde estas?
  if (resultado == "Alberta onde estás") {
    albertafala('Estou sempre aqui para si chefe');
  }
  // Quem te criou? 
  if (resultado == "Alberta Quem te criou" || resultado == "Alberta Quem é o teu pai" || resultado == "Alberta Quem é o teu criador") {
    albertafala('O grande Carlos Teixeira');
  }
  // Quando nasceste?
  if (resultado == "Alberta Quando nasceste" || resultado == "Alberta Quando é que nasceste" || resultado == "Alberta Quando é que fostes criado") {
    albertafala('No dia 21 de outubro de 2017');
  }
  // Toca piano
  if (resultado == "Alberta toca piano") {
    piano.play();
  }
  // Faz beatbox
  if (resultado == "Alberta faz beatbox") {
    beatbox.play();
  }
  // fim função
}

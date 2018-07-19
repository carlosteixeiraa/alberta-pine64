var microfone;
var canvas;

function canvasCentro() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent('bola')
  microfone = new p5.AudioIn();
  microfone.start();
}

function draw() {
  fill(209);
  background('#1976d2');
  noStroke();
  var volume = microfone.getLevel();
  var bolat = (volume*300)+ 50;
  ellipse(150, 150, bolat, bolat);

  fill(255);
  noStroke();
  ellipse(150, 150, 50, 50)
  getAudioContext().resume()
}

function windowResized() {
  canvasCentro();
}

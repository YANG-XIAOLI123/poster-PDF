let font;
let g;
let formes = [];
let numformes = 20;

function preload() {
  font = loadFont("./fonts/BUTTERSANS-REGULAR.OTF");
}

function setup() {
  createCanvas(595, 842,"svg"); 
  addDownloadButton();

 g = createGraphics(200,200);

  
  
  g.background("black");
  g.textFont(font);
  g.textAlign(CENTER, CENTER);
g.textSize(60);
  g.fill("DeepPink");
  
  g.text("KUN", g.width / 2, g.height / 2);

  for (let i = 0; i < numformes; i++) {
    formes.push({
      x: random(width),
      y: random(height),
      size: random(100, 250),
      angle: random(TWO_PI),
      velocità: random(0.01, 0.03),
    });
  }
}

function draw() {
  background("MediumOrchid");

  for (let forme of formes) {
    push();
    translate(forme.x, forme.y);
    rotate(forme.angle);
    forme.angle += forme.velocità;
    imageMode(CENTER);
    image(g, 0, 0, forme.size, forme.size);
    pop();
  }

  textFont(font);
  textSize(300);
  textAlign(CENTER, CENTER);
  let x =width / 2;
  let y = height / 2;


  fill("WHITE");
  text("LILI", x, y);
}
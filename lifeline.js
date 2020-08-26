let columns;
let rows;

let boxSize;
let paddingSize;

let boxesCount;
let boxesFilled;

let yearsExpected = 78.54;
let yearsLived = 35.0;
let fractionLived = yearsLived / yearsExpected;

let backgroundColor;
let boxDarkColor;
let boxLightColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  updateLayout();
  
  backgroundColor = color(25);
  boxDarkColor = color(100);
  boxLightColor = color(200);
}

function draw() {
  background(backgroundColor);

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      let boxIndex = (row * columns) + column;

      // Position
      let x = (column * boxSize) + ((column + 1) * paddingSize)
      let y = (row * boxSize) + ((row + 1) * paddingSize);

      // Color
      let currentBoxFillFraction = boxesFilled - boxIndex;
      let boxColor = lerpColor(boxDarkColor, boxLightColor, currentBoxFillFraction);
      fill(boxColor);

      square(x, y, boxSize);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateLayout();
  redraw();
}

function updateLayout() {
  /*
  columns = round(width / 30);
  boxSize = (8 * width) / (9 * columns + 1);
  paddingSize = boxSize / 8;
  rows = floor((height - paddingSize) / (boxSize + paddingSize));
  */

  /*
  let boxSize = 26;
  let paddingSize = 3;
  let columns = 13;
  let rows = 23;
  */

  columns = 12;
  boxSize = (8 * width) / (9 * columns + 1);
  paddingSize = boxSize / 8;
  rows = floor((height - paddingSize) / (boxSize + paddingSize));
  
  boxesCount = columns * rows;
  boxesFilled = boxesCount * fractionLived;
}

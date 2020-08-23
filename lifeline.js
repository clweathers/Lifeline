let box_size = 26;
let padding_size = 3;

let columns = 13
let rows = 12

let years_expected = 78.54;
let years_lived = 35.0;
let fraction_lived = years_lived / years_expected;

let background_color;
let box_dark_color;
let box_light_color;

function setup() {
  createCanvas(375, 667);
  
  background_color = color(25);
  box_dark_color = color(100);
  box_light_color = color(200);
}

function draw() {
  background(background_color);

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      let x = (column * box_size) + ((column + 1) * padding_size)
      let y = (row * box_size) + ((row + 1) * padding_size);
      square(x, y, box_size);
    }
  }
}

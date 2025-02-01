let selectedColor = "black"; // Default color
let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "pink", "brown", "white", "black"];
let paletteX = 10, paletteY = 10, squareSize = 15;

function setup() {
  createCanvas(300, 200);
  background(255); // Clear canvas only once
}

function draw() {
  drawPalette();
}

function drawPalette() {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    square(paletteX, paletteY + i * squareSize, squareSize);
  }
}

function mousePressed() {
  // Check if the click is inside the palette area
  if (mouseX >= paletteX && mouseX <= paletteX + squareSize) {
    let index = Math.floor((mouseY - paletteY) / squareSize);
    if (index >= 0 && index < colors.length) {
      selectedColor = colors[index]; // Update selected color
      console.log("Selected Color:", selectedColor); // Debugging feedback
    }
  }
}

function mouseDragged() {
  // Prevent painting over the palette
  if (mouseX > paletteX + squareSize + 10) { 
    fill(selectedColor);
    noStroke();
    circle(mouseX, mouseY, 10);
  }
}


/* 
Click and Drag mouse to apply paint
Click on color palette boxes to set color.

PAINT SHOULD NOT BE ABLE TO APPLY OVER THE PALETTE!
 */
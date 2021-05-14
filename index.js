function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// Define color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
letterColors = [red, orange, green, blue, purple];

// Mouse Distance
mouseResponseThreshold = 75;

// Dots-Return Position
friction = 0.90;

// Dots-Rotate Position
rotationForce = 0.003;

message1 = 'Happy BDay Khushi!';
//array = ["A", "B", "C"];
/*var i;
for(i = 0; i<array.length; i++){
	message = array;
	drawName(message, letterColors);
	sleep(5000);
}
*/
drawName(message1, letterColors);

//drawName(message1, green);
//drawName(message2, letterColors);
bounceBubbles();




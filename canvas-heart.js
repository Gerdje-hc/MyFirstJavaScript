

context.fillStyle = 'red';
context.beginPath();
context.moveTo (150,60);                        // start at point 0
context.bezierCurveTo (150,30, 100,30, 90,30);  // from point 0 to point 1
context.bezierCurveTo (60,30,30,60,30,90);      // from point 1 to point 2
context.bezierCurveTo (30,180,90,210,150,240);  // from point 2 to point 3
context.bezierCurveTo (210,210,270,180,270,90); // from point 3 to point 4
context.bezierCurveTo (270,60,240,30,210,30);   // from point 4 to point 5
context.bezierCurveTo (180,30,150,30,150,60);   // from point 5 to point 0
context.fill();
let xPos, yPos, xDir, yDir;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
    xPos = width/2;
    yPos = height/2;
    xDir = 1;
    yDir = 1;
}

function draw() {
    background(220);
    fill(0);
    circle(xPos, yPos, 50);

    xPos = xPos + xDir;
    
    if (xPos+25 > width || xPos < 0) {
        xDir *= -1;
    }

    yPos = yPos + yDir;

    if (yPos+25 > height || yPos < 0) {
        yDir *= -1;
    }
}
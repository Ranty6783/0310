
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	colorMode(HSB) //色相:0-360，飽和度0-100，亮度 0-100
	fill(100+(mouseX/10)%361,100,100)
	ellipse(mouseX, mouseY, 100, 100);
}


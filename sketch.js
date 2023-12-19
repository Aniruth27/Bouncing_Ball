function setup() {
  createCanvas(800, 500)
  background(255)
  fill(random(255), random(255), random(255))
  x = 100
  y = 100
  speedx = 4
  speedy = 3
}

function draw() {
  circle(x, y, 50)
  x += speedx
  y += speedy
  if (x >= width)
    speedx = -4
  if (y >= height)
    speedy = -3  
  if (x <= 0)
    speedx = 4
  if (y <= 0)
    speedy = 3
}
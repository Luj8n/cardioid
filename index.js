let POINT_COUNT = 1000;
let FACTOR = 2;
let MARGIN = 50;

function setup() {
  L.setCanvasSize(900, 900);
  L.centerCanvas();
}

function makePoints(total, radius) {
  let vectors = [];
  for (let i = 0; i < total; i++) {
    let pointAngle = L.map(i, 0, total, 0, Math.PI * 2);
    let v = L.Vector2D.fromAngle(pointAngle).setMag(radius);
    // L.fill("white");
    // L.Ellipse(v.x, v.y, 10);
    vectors.push(v);
  }
  return vectors;
}

function drawLines(points, total, factor, radius) {
  points.forEach((point, value) => {
    let nextValue = (value * factor) % total;
    let angle = L.map(nextValue, 0, total, 0, Math.PI * 2);
    let v = L.Vector2D.fromAngle(angle).setMag(radius);
    L.stroke(`rgba(255, 255, 255, 0.1)`);
    L.strokeWeight(1);
    L.Line(point.x, point.y, v.x, v.y);
  });
}

function draw() {
  L.background("black");

  L.translate(L.width / 2, L.height / 2);
  L.scale(-1, 1);

  let radius = L.width / 2 - MARGIN;

  L.noFill();
  L.stroke("white");
  L.strokeWeight(2);
  L.Ellipse(0, 0, radius * 2);

  let points = makePoints(POINT_COUNT, radius);

  drawLines(points, POINT_COUNT, FACTOR, radius);

  FACTOR += 0.1;
}

const { Engine, Bodies, Constraint, World, MouseConstraint, Mouse, Render } = Matter;
var engine, world;
var ball, sling;
var mouseConstraint;
var ground;
var boxes = [];
var box1, box2, box3, box4;
var gameState = "shoot";
var canvas;

function setup() {
    canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    renderer = Render.create({
        element: canvas.elt,
        engine: engine,
        options: {
            wireFrames: true
        }
    })

    box1 = new Box(650, 50);
    box2 = new Box(700, 50);
    box3 = new Box(650, 110);
    box4 = new Box(700, 110);
    boxes.push(box1, box2, box3, box4);
    ground = new Ground();
    ball = new Ball(105, 256);
    sling = new Cons(ball.body, { x: 105, y: 256 });
    console.log(canvas.elt);
}

function draw() {
    background(255, 255, 255);
    console.log(sling.cons);
    Engine.update(engine);
    Render.run(renderer)
    for (var i = 0; i < 4; i++) {
        boxes[i].display();
    }
    ball.display();
    ground.display();

}

function mouseDragged() {
    if (gameState == "shoot") {
        Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    gameState = "recollect";
    sling.fly();
}

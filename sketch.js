const { Engine, Bodies, Constraint, World, MouseConstraint, Mouse, Render, Composite } = Matter;
var engine, world;
var ball, sling;
var mouseConstraint;
var ground;
var boxes = [];
var box1, box2, box3, box4;
var gameState = "shoot";
var canvas, render;

function setup() {
    canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    render = Render.create({
        element: canvas.elt,
        engine: engine,
        options: {
            width: 800,
            length: 400
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
    //console.log(canvas.elt);
}

function draw() {
    background(0)
    console.log(sling.cons);
    Engine.update(engine);
    for (var i = 0; i < 4; i++) {
        boxes[i].display();
    }
    ball.display();
    ground.display();
    if (gameState === "shoot") {
        stroke("red")
        line(ball.body.position.x, ball.body.position.y, 105, 256);
    }
    rectMode(CENTER)
    rect(105, 318, 25, 89)
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
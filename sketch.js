const { Engine, Bodies, Constraint, World, MouseConstraint } = Matter;
var engine, world;
var ball, sling;
var mouseConstraint;

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(105, 256);
    sling = new Cons(ball.body, { x: 105, y: 256 });
}

function draw() {
    background(255, 255, 255);
    //console.log(mouseX, mouseY);
    Engine.update(engine);
    ball.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
    /*var mouse = Matter.Mouse.create(document.body);
    var options = {
        'body': ball.body,
        'mouse': mouse
    }
    var mcons = MouseConstraint.create(engine, options);
    World.add(world, mcons);*/
    /*var mouse = Matter.Mouse.create(document.body),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            body: ball.body,
            constraint: {
                stiffness: 0.2,
                length: 10
            }
        });
    World.add(world, mouseConstraint);*/
}

function mouseReleased() {
    sling.fly();
}
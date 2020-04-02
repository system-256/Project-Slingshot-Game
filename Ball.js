class Ball {
    constructor(x, y) {
        var options = {
            'density': 1
        }
        this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipse(pos.x, pos.y, 20, 20);
        push();
        pop();
    }
}
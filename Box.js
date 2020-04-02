class Box {
    constructor(x, y) {
        var options = {
            'density': 0.005
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
    }
    display() {
        if (this.body.speed < 3) {
            var pos = this.body.position;
            rectMode(CENTER)
            rect(pos.x, pos.y, 50, 50);
            push();
            pop();
        } else {
            World.remove(world, this.body)
        }
    }
}
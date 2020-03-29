class Ground {
    constructor() {
        var options = {
            'isStatic': 0.2
        }
        this.body = Bodies.rectangle(400, 380, 800, 20, options);
        World.add(world, this.body);
        this.w = 800;
        this.h = 20;
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER)
        rect(pos.x, pos.y, this.w, this.h);
        push();
        pop();
    }
}
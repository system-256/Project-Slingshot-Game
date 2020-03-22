class Cons {
    constructor(bodyA, pointB) {
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'restitution': 0.5,
            'length': 15
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
        push();
        pop();
    }
    fly() {
        this.sling.bodyA = null;
    }
}
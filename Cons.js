class Cons {
    constructor(bodyB, pointA) {
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            restitution: 10,
            stiffness: 0.5,
            length: 0.01
        }
        this.cons = Constraint.create(options);
        World.add(world, this.cons);
    }

    fly() {
        //this.cons.bodyB = newBody;
        this.cons.bodyB = null;
    }
}
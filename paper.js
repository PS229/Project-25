class Paper {
    constructor(x,y,r,angle) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:3
        }
        this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}
class Fall{
    constructor(x,y,z, world) {
        this.x = x;
        this.y= y;
        this.z = z;
        this.xOffset = random(1000);
        this.zOffset = random(2000, 3000);
        this.myFall = new Box({
            x:random(-25, 25), y:10, z:random(-25, 25),
            height: .1,
            width:.1,
			red:232, green:77, blue:229
		});
		
		

        world.add(this.myFall);
    }

	
	
	

	
	move() {
		let yMovement = -0.03;
		let xMovement = map(noise(this.xOffset), 0, 1, -0.05, 0.05);
		let zMovement = map(noise(this.zOffset), 0, 1, -0.05, 0.05);
		
		this.xOffset += 0.01;
		this.yOffset += 0.01;
		
		this.myFall.nudge(xMovement, yMovement, zMovement);
		
		let fallY = this.myFall.getY();
		
		if (fallY < -1) {
			world.remove(this.myFall);
			return "gone";
		}
		
		else {
			return "ok";
		}
	}
}
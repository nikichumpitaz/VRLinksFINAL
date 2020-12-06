
class AirBubs{
    constructor(x,y,z, world) {
        this.x = x;
        this.y= y;
        this.z = z;
        this.xOffset = random(1000);
        this.zOffset = random(2000, 3000);
        this.myAirBubs = new Sphere({
            x:random(-25, 25), y:10, z:random(-25, 25),
			radius:0.02,
			red:130, green:190, blue:207
		});
		
		

        world.add(this.myAirBubs);
    }

	
	
	

	
	move() {
		let yMovement = -0.03;
		let xMovement = map(noise(this.xOffset), 0, 1, -0.05, 0.05);
		let zMovement = map(noise(this.zOffset), 0, 1, -0.05, 0.05);
		
		this.xOffset += 0.01;
		this.yOffset += 0.01;
		
		this.myAirBubs.nudge(xMovement, yMovement, zMovement);
		
		let airbubY = this.myAirBubs.getY();
		
		if (airbubY < -1) {
			world.remove(this.myAirBubs);
			return "gone";
		}
		
		else {
			return "ok";
		}
	}
}

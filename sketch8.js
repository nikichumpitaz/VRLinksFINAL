let world, myModel, bling;
let water = '#wtr';
let airbub = []; 
let szChange = 0.01;


function preload() {
  //bling = loadSound('images/sound.mp3');
}

function setup() {
	noCanvas();
	world = new World('VRScene');
	makeGround();
	makeBubbles();

}

function draw() {
  //move the user
	move();
	
	//create the sky
	let sky = select('#theSky');
	sky.attribute('src', water);
	
	// bubble.attribute('#animate');

	    //create a new flake
    
		var temp = new AirBubs(0, 0, -5, world);
		airbub.push(temp);
		
		//draw all flakes
		
		for (var i = 0; i < airbub.length; i++) {
			let result = airbub[i].move();
			if (result == "gone") {
				airbub.splice(i, 1);
				i -= 1;
			}
		}

}

function makeGround(){
	  //create a plane
	  var g = new Plane({
		x:0, y:0, z:0, 
		width:50, height:50, 
		asset: 'glow',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2
	});

world.add(g);
}




function makeBubbles(){
		
  for (var i = 0; i < 140; i++) {
	var tx = random(-25, 25);
	var tz = random(-25, 25);
	var ts = random(0.5, 2);
	
	if (tx < -2 || tx > 2) {
	  if (tz < -3 || tz > 3) {
		bubble = new Container3D({
			x:tx, y:0, z:tz,
			scaleX:ts, scaleY:ts, scaleZ:ts
	  });
	  
	  world.add(bubble);
	  var bubble_t = new Sphere({
					  x:-3, y:0.8, z:0,
					  height:0.2,
					  radius: 0.9,
					  red:171, green:235, blue:231,
					  opacity: 0.5
				   });
	  bubble.addChild(bubble_t);

	  var bubble_l1 = new Sphere({
					  x:5, y:2, z:0,
					  height:1,
					  radiusBottom: 1.2, radiusTop: 0.4,
					  red:171, green:235, blue:231,
					  opacity: 0.5
				  });
	  bubble.addChild(bubble_l1);

	  var bubble_l2 = new Sphere({
					  x:-10, y:3, z:0,
					  height:0.8,
					  radiusBottom: 0.8, radiusTop: 0.2,
					  red:171, green:235, blue:231,
					  opacity: 0.5
				  });
	  bubble.addChild(bubble_l2);

	  var bubble_l3 = new Sphere({
					  x:0, y:4.7, z:4,
					  height:0.6,
					  red:171, green:235, blue:231,
					  opacity: 0.5
				  });
	  bubble.addChild(bubble_l3);
	  }
	}
}
}


function move(){
	if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.03);
	}

	var pos = world.getUserPosition();
	
	if (pos.x > 25) {
		world.setUserPosition(-25, pos.y, pos.z);
	}
	else if (pos.x < -25) {
		world.setUserPosition(25, pos.y, pos.z);
	}
	if (pos.z > 25) {
		world.setUserPosition(pos.x, pos.y, -50);
	}
	else if (pos.z < -25) {
		world.setUserPosition(pos.x, pos.y, 50);
	}
}
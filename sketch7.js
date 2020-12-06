let world, myModel, bling;
let cool = '#cl2';
let flakes = []; 
let szChange = 0.01;
// var mymodel;
// var allImages = ['#sky'];
// var flakes = [];
// var bling;

function preload() {
  //bling = loadSound('images/sound.mp3');
}

function setup() {
	noCanvas();
	world = new World('VRScene');
	makeGround();
	makeKnots();

}



function draw() {
  //move the user
	move();
	
	
	
	//create the sky
	let sky = select('#theSky');
	sky.attribute('src', cool);
	
	
    //create a new flake
    
	// var temp = new Flake(0, 0, -5, world);
	// flakes.push(temp);
	
    //draw all flakes
    
	// for (var i = 0; i < flakes.length; i++) {
	// 	let result = flakes[i].move();
	// 	if (result == "gone") {
	// 		flakes.splice(i, 1);
	// 		i -= 1;
	// 	}
	// }
}

function makeGround(){
	  //create a plane
	  var g = new Plane({
		x:0, y:0, z:0, 
		width:50, height:50, 
		asset: 'tex5',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2
	});

world.add(g);
}




function makeKnots(){
		
  //create many trees
  for (var i = 0; i < 80; i++) {
	var tx = random(-25, 25);
	var tz = random(-25, 25);
	var ts = random(0.5, 2);
	
	if (tx < -2 || tx > 2) {
	  if (tz < -3 || tz > 3) {
		knot = new Container3D({
			x:tx, y:0, z:tz,
			scaleX:ts, scaleY:ts, scaleZ:ts
	  });
	  
	  world.add(knot);
  
	  var knot_t = new TorusKnot({
					  x:-4, y:0.3, z:0,
					  height:0.2,
					  radius: 0.9,
					  p:7,
					  q:8,
					  red:21, green:168, blue:10,
					  opacity: 0.9
				   });
	  knot.addChild(knot_t);

	  var knot_l1 = new TorusKnot({
					  x:0, y:1.1, z:-7,
					  height:1,
					  radiusBottom: 1.2, radiusTop: 0.4,
					  p:2,
					  q:3,
					  red:83, green:83, blue:252,
					  opacity: 0.7
				  });
	  knot.addChild(knot_l1);

	  var knot_l2 = new TorusKnot({
					  x:3, y:2, z:0,
					  height:0.8,
					  radiusBottom: 0.8, radiusTop: 0.2,
					  p:8,
					  q:3,
					  red:222, green:106, blue:64,
					  opacity: 0.8
				  });
	  knot.addChild(knot_l2);

	  var knot_l3 = new TorusKnot({
					  x:-2, y:2.7, z:5,
					  height:0.6,
					  radiusBottom: 0.01, radiusTop: 0,
					  p:5,
					  q:1,
					  red:222, green:190, blue:64,
				  });
	  knot.addChild(knot_l3);
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
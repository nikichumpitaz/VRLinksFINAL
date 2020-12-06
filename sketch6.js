let world, myModel, bling;
let landscape = '#lsc';
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
	makeTrees();

}



function draw() {
  //move the user
	move();

	
	
	//create the sky
	let sky = select('#theSky');
	sky.attribute('src', landscape);
	
	
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
		asset: 'stone',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2 
	});

world.add(g);
}




function makeTrees(){
		
  //create many trees
  for (var i = 0; i < 200; i++) {
	var tx = random(-25, 25);
	var tz = random(-25, 25);
	var ts = random(0.5, 2);
	
	if (tx < -2 || tx > 2) {
	  if (tz < -3 || tz > 3) {
		tree = new Container3D({
			x:tx, y:0, z:tz,
			scaleX:ts, scaleY:ts, scaleZ:ts
	  });
	  
	  world.add(tree);
  
	  var tree_t = new Box({
					  x:0, y:0.3, z:0,
					  height:0.2,
					  radius: 0.9,
					  red:0, green:74, blue:143,
				   });
	  tree.addChild(tree_t);

	  var tree_l1 = new Box({
					  x:0, y:1.1, z:0,
					  height:1,
					  radiusBottom: 1.2, radiusTop: 0.4,
					  red:172, green:235, blue:171,
					  opacity: 0.5
				  });
	  tree.addChild(tree_l1);

	  var tree_l2 = new Cylinder({
					  x:0, y:4, z:0,
					  height:8,
					  radius: .5,
					  red:84, green:43, blue:32,
					  opacity: 0.9
				  });
	  tree.addChild(tree_l2);

	  var tree_l3 = new Cone({
					  x:0, y:8, z:0,
					  height:0.6,
					  radiusBottom: 2, radiusTop: 1,
					  red:100, green:186, blue:19,
				  });
	  tree.addChild(tree_l3);
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
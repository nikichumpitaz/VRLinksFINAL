let world, myModel, bling;
let trippy3 = '#tr3';
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
	makeShape();

}



function draw() {
  //move the user
	move();
	

	
	//create the sky
	let sky = select('#theSky');
	sky.attribute('src', trippy3);
	
	
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
        asset: 'tex10',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2
	});

world.add(g);
}




function makeTrees(){
		
  //create many trees
  for (var i = 0; i < 190; i++) {
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
					  x:-8, y:0.3, z:0,
					  height:0.2,
					  radius: 0.9,
					  red:212, green:8, blue:127,
				   });
	  tree.addChild(tree_t);

	  var tree_l1 = new Box({
					  x:9, y:2.1, z:0,
					  height:2,
					  radiusBottom: 1.2, radiusTop: 0.4,
					  red:8, green:212, blue:137,
					  opacity: 0.5
				  });
	  tree.addChild(tree_l1);

	  var tree_l2 = new Box({
					  x:-6, y:2, z:3,
					  height:0.8,
					  radiusBottom: 0.8, radiusTop: 0.2,
					  red:201, green:212, blue:8,
					  opacity: 0.9
				  });
	  tree.addChild(tree_l2);

	  var tree_l3 = new Box({
					  x:4, y:2.7, z:8,
					  height:0.6,
					  radiusBottom: 0.01, radiusTop: 0,
					  red:90, green:8, blue:212,
				  });
	  tree.addChild(tree_l3);
	  }
	}
}
}

function makeShape(){
		

	for (var i = 0; i < 60; i++) {
	  var tx = random(-15, 15);
	  var tz = random(-15, 15);
	  var ts = random(0.5, 2);
	  
	  if (tx < -2 || tx > 2) {
		if (tz < -3 || tz > 3) {
		  shape = new Container3D({
			  x:tx, y:0, z:tz,
			  scaleX:ts, scaleY:ts, scaleZ:ts
		});
		
		world.add(shape);
	
		var shape_t = new Box({
						x:0, y:0.3, z:0,
						height:0.2,
						radius: 0.9,
						red:0, green:74, blue:143,
					 });
		shape.addChild(shape_t);
  
		var shape_l1 = new Box({
						x:0, y:.4, z:6,
						height:.8,
						radiusBottom: 1.2, radiusTop: 0.4,
						red:0, green:64, blue:191,
						opacity: 0.9
					});
		shape.addChild(shape_l1);
  
		var shape_l2 = new Box({
						x:0, y:1.3, z:0,
						height:0.8,
						radiusBottom: 0.8, radiusTop: 0.2,
						red:240, green:10, blue:10,
						opacity: 0.9
					});
		shape.addChild(shape_l2);
  
		var shape_l3 = new Box({
						x:0, y:2.3, z:0,
						height:0.6,
						radiusBottom: 0.01, radiusTop: 0,
						red:10, green:240, blue:229,
					});
		shape.addChild(shape_l3);
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
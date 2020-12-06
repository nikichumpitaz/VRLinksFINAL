let world, myModel, bling;
let paint = '#pt';
let fall = []; 
let szChange = 0.01;

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
	sky.attribute('src', paint);
	
	
    //create a new flake
    
	var temp = new Fall(0, 0, -5, world);
	fall.push(temp);
	
    //draw all flakes
    
	for (var i = 0; i < fall.length; i++) {
		let result = fall[i].move();
		if (result == "gone") {
			fall.splice(i, 1);
			i -= 1;
		}
	}
}

function makeGround(){
	  //create a plane
	  var g = new Plane({
		x:0, y:0, z:0, 
		width:50, height:50, 
		asset: 'tex3',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2
	});

world.add(g);
}




function makeTrees(){
		
  for (var i = 0; i < 90; i++) {
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
  
	  var tree_t = new Torus({
					  x:0, y:0.3, z:0,
					  height:0.2,
					  radius: 0.9,
					  red:24, green:8, blue:66,
				   });
	  tree.addChild(tree_t);

	  var tree_l1 = new Torus({
					  x:0, y:1.1, z:0,
					  height:1,
					  radiusBottom: 1.2, radiusTop: 0.4,
					  red:21, green:212, blue:72,
					  opacity: 0.5
				  });
	  tree.addChild(tree_l1);

	  var tree_l2 = new Torus({
					  x:0, y:2, z:0,
					  height:0.8,
					  radiusBottom: 0.8, radiusTop: 0.2,
					  red:143, green:0, blue:71,
					  opacity: 0.9
				  });
	  tree.addChild(tree_l2);

	  var tree_l3 = new Torus({
					  x:0, y:2.7, z:0,
					  height:0.6,
					  radiusBottom: 0.01, radiusTop: 0,
					  red:0, green:0, blue:0,
				  });
	  tree.addChild(tree_l3);
	  }
	}
}
}

function makeShape(){
		

	for (var i = 0; i < 70; i++) {
	  var tx = random(-25, 25);
	  var tz = random(-25, 25);
	  var ts = random(0.5, 2);
	  
	  if (tx < -2 || tx > 2) {
		if (tz < -3 || tz > 3) {
		  shape = new Container3D({
			  x:tx, y:0, z:tz,
			  scaleX:ts, scaleY:ts, scaleZ:ts
		});
		
		world.add(shape);
	
		var shape_t = new Torus({
						x:0, y:0.3, z:0,
						height:0.2,
						radius: 0.9,
						red:6, green:30, blue:71,
					 });
		shape.addChild(shape_t);
  
		var shape_l1 = new Torus({
						x:0, y:1.1, z:0,
						height:1,
						radiusBottom: 1.2, radiusTop: 0.4,
						red:144, green:10, blue:240,
						opacity: 0.5
  
					});
		shape.addChild(shape_l1);
  
		var shape_l2 = new Torus({
						x:0, y:2, z:0,
						height:0.8,
						radiusBottom: 0.8, radiusTop: 0.2,
						red:0, green:92, blue:117,
						opacity: 0.9
					});
		shape.addChild(shape_l2);
  
		var shape_l3 = new Torus({
						x:0, y:2.7, z:0,
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
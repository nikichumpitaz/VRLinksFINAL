let world, myModel, bling;
let art = '#art';
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
	sky.attribute('src', art);
	
	
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
		asset: 'tex2',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2
	});

world.add(g);
}




function makeTrees(){
		
  //create many trees
  for (var i = 0; i < 40; i++) {
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
					  width: 8.7,
					  depth: 8.7,
					  radius: 0.9,
					  red:84, green:15, blue:38,
					  opacity:0.5,
				   });
	  tree.addChild(tree_t);

	  var tree_l1 = new Plane({
					  x:0, y:3.1, z:0,
					  height:8,
					  width: 8,
					  radiusBottom: 1.2, radiusTop: 0.4,
					  red:232, green:188, blue:12,
					  opacity: 0.5

					//   <a-entity geometry="primitive:sphere;
					//   radius:1;
					//   segmentsWidth:18;segmentsHeight:36;
					//   phiStart:0;phiLength:360;thetaStart:0;
					//   thetaLength:360" material="opacity:1;
					//   transparent:false;shader:standard;
					//   side:front;roughness:0.5;metalness:0.1;
					//   repeat:1 1;color:#fbff00"
					//    scale="1 1 1" position="5.73 8.57 0" rotation="0 0 0" visible="true"></a-entity>



				  });
	  tree.addChild(tree_l1);

	  var tree_l2 = new Box({
					  x:0, y:2, z:0,
					  height:0.8,
					  width:0.5,
					  depth: 10,
					  radiusBottom: 0.8, radiusTop: 0.2,
					  red:143, green:0, blue:71,
					  opacity: 0.5
				  });
	  tree.addChild(tree_l2);

	  var tree_l3 = new Box({
					  x:0, y:2.7, z:0,
					  height:0.6,
					  width:10,
					  radiusBottom: 0.01, radiusTop: 0,
					  red:0, green:0, blue:0,
					  opacity: 0.5,
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
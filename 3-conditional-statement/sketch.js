//create an empty array called balls
let squares = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Square(width, random(0,height), -3);
      squares.push(b);
      console.log(squares); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < squares.length; i++) {
	 	      squares[i].drawSquare();
       	  squares[i].moveSquare();
          squares[i].bounceSquare();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;


        }
      }
    }
	}

  }

}


//ball class from which to create new balls with similar properties.
class Square {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawSquare(){
    	stroke(0);
      strokeWeight(1);
    	fill("blue");
		  rect(this.x,this.y,20,20);
	}

	//update the location of the ball, so it moves across the screen
	moveSquare(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceSquare(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
      hitcount=hitcount +1
    		}
  	}

}


//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
      squares[i].drawSquare();
      squares[i].moveSquare();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(200, 200);
  let s = new Square(30,30);
  balls.push(b);
  console.log(balls);
  squares.push(s);
  console.log(squares)
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("red");
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}


}


class Square {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}
	drawSquare(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("blue");
		    rect(this.x,this.y, 10,10);
	}
	moveSquare(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+1;
		this.y = this.y+1;
	}
}

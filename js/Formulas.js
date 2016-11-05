	// Formulas
	function getVelocity(angle, speed){
		return new Vector2(Math.sin(angle * Math.PI/180) * speed, Math.cos(angle * Math.PI/180) * -speed);
	}
	
	function distanceFromP(a, b){
		var sum = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
		return Math.sqrt(sum);
	}
	
	function collision(x, y, r, b, x2, y2, r2, b2) {
		return !(r <= x2 || x > r2 || b <= y2 || y > b2);
	}

	function checkCollision(a, b) {
		return collision(a.pos.x, a.pos.y, a.pos.x + a.size, a.pos.y + a.size,
			b.pos.x, b.pos.y, b.pos.x + b.size, b.pos.y + b.size);
	}
	
	function getNewPoint(){
		var x = Math.round(Math.random() * canvas.width - 10);
		var y = Math.round(Math.random() * canvas.height - 10);
		if( x != player.pos.x && y != player.pos.y){
			return new Point(x, y);
		} else {
			return getNewPoint();
		}
	}
	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function getTwoDigit(x){
		return Math.round(x * 100)/100;
	}
	
	function angleBetweenVectors(a, b){
		var cosAngle = (a.x * b.x + a.y * b.y) / (norm(a) * norm(b));
		var angle = Math.acos(cosAngle) * 180 / Math.PI;
		return twoDigit(angle);
	}
	
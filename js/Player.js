// Player class
	function Player(x, y, image){
		GameObject.call(this, x, y, image);
		this.turret = new GameObject(x, y, loadImage(images[1]));
		this.counter = 0;
		this.fireUp  = false;
		this.move = function(direction){
			this.velocity = getVelocity(this.angle, direction * this.speed);
			this.update();
		}
		this.fire = function(){
			var	bullet = new Bullet(this.pos.x, this.pos.y, loadImage(images[2]));
				bullet.angle = this.turret.angle;
				bullet.speed = this.speed * 2;
				bullet.velocity = getVelocity(bullet.angle, bullet.speed);
				playerBullets.push(bullet);
		}
		var draw = this.draw;
		this.draw = function(c){
			draw.call(this, c);
			this.turret.pos.x = this.pos.x;
			this.turret.pos.y = this.pos.y;
			this.turret.draw(c);
		}
	}
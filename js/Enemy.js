// Enemy class
	function Enemy(x, y, image){
		GameObject.call(this, x, y, image);	
		this.onPursue = false;
		this.speed = 1;
		this.counter = 0;
		this.authorizedArea = { a : new Point(0,0), b : new Point(0,0), c : new Point(0,0), d : new Point(0,0) };
		this.update = function(){			
			if (this.angleTo > this.angle + 180) this.angleTo -= 360;
			if (this.angleTo < this.angle - 180) this.angleTo += 360;
			this.angle += (this.angleTo - this.angle) / 4;
			this.pos.x += this.velocity.x;
			this.pos.y += this.velocity.y;
			if(this.getDistanceFromP(this.routePoint) <= 10) this.onPursue = false;
		}
		
		this.getRotationAngle = function(p){
			if(this.onPursue) return;
			this.routePoint = p;
			var direction = new Vector2(p.x - this.pos.x, p.y - this.pos.y);
//			var distance = direction.norm();
			this.velocity = direction.normalize();
			var rotation = this.getRadians(this.velocity.x, this.velocity.y);
			this.angleTo = Math.floor(rotation * 180 / Math.PI);
			this.onPursue = true;
			return this.angleTo;
		}
		
		this.getRadians = function(x, y){
			var r = Math.atan2(x, -y);
			if (y < 0) r += (2 * Math.PI);
			return r;
		}
		
		this.getDistanceFromP = function(point){
			return distanceFromP(this.pos, point);
		}
		
		this.fire = function(){
			var	bullet = new Bullet(this.pos.x, this.pos.y, loadImage(images[2]));
				bullet.angle = this.angle;
				bullet.speed = this.speed * 2;
				bullet.velocity = getVelocity(bullet.angle, bullet.speed);
				enemyBullets.push(bullet);
		}
	}
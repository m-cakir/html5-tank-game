// GameObject class
	function GameObject(x, y, image){
		this.pos = new Point(x, y);
		this.alive = true;
		this.size = size;
		this.speed = 2;
		this.image = image;
		this.angle = 0;
		this.velocity = new Vector2(0, 0);
//		this.center = new Vector2(Math.floor(this.x + this.size/2), Math.floor(this.y + this.size/2));	
		this.update = function(){
			this.pos.x += this.velocity.x;
			this.pos.y += this.velocity.y;
		}
		this.draw = function(c) { 
			var halfSize = this.size/2;
			c.save();
			c.translate(this.pos.x, this.pos.y);
			c.translate(halfSize, halfSize);
			c.rotate(this.angle * Math.PI/180);
			c.drawImage(this.image, -halfSize, -halfSize); 
			c.restore();
		}
		this.checkBoundary = function(){
			return ((this.pos.x + this.size) > canvas.width ||
				(this.pos.y + this.size) > canvas.height || this.pos.x < 0 || this.pos.y < 0);
		}
	}
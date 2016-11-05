// Bullet class
	function Bullet(x, y, image){
		GameObject.call(this, x, y, image);
	}
	
// Explosion class
	function Explosion(x, y){
		GameObject.call(this, x, y, loadImage(images[3]));
		this.frame = 0;
		this.frameCount = 12;
		this.draw = function(c){
			c.save();
			c.drawImage(this.image, this.frame * this.size, 0, this.size, this.size, this.pos.x, this.pos.y, this.size, this.size);
			c.restore();
			if(this.frame < this.frameCount-1){
				this.frame++;
			} else {
				this.done = true;
			}
		}
	}
	// point class
	function Point(x, y){
		this.x = x;
		this.y = y;
		this.length = function(){
			return distanceFromP(this, new Point(0, 0));
		};
	}
	
	// 2D Vector class
	function Vector2(x, y){
		this.x = x ? x : 0;
		this.y = y ? y : 0;
		this.length = function(){
			return distanceFromP(this, new Point(0, 0));
		};
		this.multiply = function(value){
			this.x *= value;
			this.y *= value;
		};
		this.norm = function(){
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}
		this.normalize = function(){
			var norm = this.norm();
			if(norm != 0){
				this.x = getTwoDigit(this.x/norm);
				this.y = getTwoDigit(this.y/norm);
			}
			return this;
		}
	}
	
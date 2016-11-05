/**************** GENERAL METHODS ******************/
	window.requestAnimFrame = (function(){
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function( callback ) {
				window.setTimeout( callback, 1000 / 60 );
			};
	})();

	function loadImage(image){
		var img = new Image();
		img.src = image;
		return img;
	}

	function clearArea(x, y, width, height){
		context.clearRect(x, y, width, height);
	}
	
	function clearCanvas(){
		clearArea(0, 0, canvas.width, canvas.height);
	}
	
	function setInfo(msg){
		var infoDiv = document.getElementById('info');
		infoDiv.innerHTML = msg;
	}
	
	function createExplosion(element){
		clearArea(element.pos.x, element.pos.y, element.size, element.size);
		explosions.push(new Explosion(element.pos.x, element.pos.y)); 
	}
	
	function initListeners(){
		d.addEventListener("keydown", keyPressed); 
	}
	
// key pressed actions
	function keyPressed(e){
		if(!player.alive) return;
		var keyCode = e.keyCode;
		console.log(keyCode);
		if(keyCode == keys.W){
			player.move(1);
		}else if(keyCode == keys.D){
			player.angle = (player.angle + turnrate) % 360;
		}else if(keyCode == keys.S){
			player.move(-1);
		}else if(keyCode == keys.A){
			player.angle -= turnrate;
		}else if(keyCode == keys.SPACE){	
			player.fireUp = true;
		}else if(keyCode == keys.ARROW_LEFT){
			if(player.turret.angle > 0) player.turret.angle -= turnrate;
			else player.turret.angle = 360;
		}else if(keyCode == keys.ARROW_RIGHT){
			player.turret.angle = (player.turret.angle + turnrate) % 360;
		}
	}
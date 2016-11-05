/******* CHECK COLLISION BULLET & ENEMIES ******/
	function isCollision(bullet, index){
		if(!bullet.alive) return;
		for(var i = 0; i < enemies.length; i++){
			var enemy = enemies[i];
			if(checkCollision(enemy, bullet)){
				enemy.alive = false;
				bullet.alive = false;
				enemies.splice(i, 1);
				playerBullets.splice(index, 1);
				i--;
				return enemy;
			}
		}
		return false;
	}

/*********** UPDATE & DRAW PLAYER *************/
	function drawPlayer(){
		if(!player.alive) return;
		player.counter++;
		if(player.counter % 20 == 0 && player.fireUp){
			playSound.fire();	
			player.fire();
			player.counter = 0;
			player.fireUp  = false;
		}
		player.draw(context); 
	}

/*********** UPDATE & DRAW ENEMIES *************/
	function updateEnemies(){
		if(enemies.length < 1) return;
		for(var i = 0; i < enemies.length; i++){
			var enemy = enemies[i];
			if(!enemy.alive) return;
			if(!enemy.onPursue){
				enemy.routePoint = getNewPoint();
				enemy.getRotationAngle(enemy.routePoint);
			}
			if(player.alive && enemy.getDistanceFromP(player.pos) <= validEnemyDistance){
				enemy.onPursue = false;
				enemy.getRotationAngle(player.pos);
				enemy.counter++;
				if(enemy.counter % 50 == 0){
					enemy.fire();
					enemy.counter = 0;
				}
			}
			enemy.update();
		}
	}
	
	function drawEnemies(){
		if(enemies.length < 1) return;
		for(var i = 0; i < enemies.length; i++){
			enemies[i].draw(context);
		}
	}
	
/*********** UPDATE & DRAW PLAYER BULLETS *************/
	function updatePlayerBullets(){
		for(var i = 0; i < playerBullets.length; i++){
			var bullet = playerBullets[i];
			bullet.update();
			if(bullet.checkBoundary()){
				bullet.alive = false;
				playerBullets.splice(i, 1);
				i--;
			} 
			var cObject = isCollision(bullet, i);
			if(cObject){
				playSound.explode();
				createExplosion(cObject);
				if(checkGameState()) setInfo("You Win!");
				break;
			}
		}
	}

	function drawPlayerBullets(){
		for(var i = 0; i < playerBullets.length; i++){
			playerBullets[i].draw(context);
		}
	}
	
/*********** UPDATE & DRAW ENEMY BULLETS *************/
	function updateEnemyBullets(){
		for(var i = 0; i < enemyBullets.length; i++){
			var bullet = enemyBullets[i];
			bullet.update();
			if(bullet.checkBoundary()){
				bullet.alive = false;
				enemyBullets.splice(i, 1);
				i--;
			}			
			if(player.alive && bullet.alive && checkCollision(player, bullet)){
				playSound.explode();
				enemyBullets.splice(i, 1);
				player.alive = false;
				bullet.alive = false;
				createExplosion(player);
				if(!checkGameState()) setInfo("You Lost!");
				break;
			}
		}
	}

	function drawEnemyBullets(){
		for(var i = 0; i < enemyBullets.length; i++){
			enemyBullets[i].draw(context);
		}
	}

/*********** DRAW EXPLOSIONS *************/
	function drawExplosions(){
		for(var i = 0; i < explosions.length; i++){
			var e = explosions[i];
			e.draw(context);
			if(e.done) explosions.splice(i, 1);
		}
	}
	

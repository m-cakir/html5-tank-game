var d = document.body;
var	keys = {
	W : 87,
	D : 68,
	S : 83,
	A : 65,
	SPACE : 32,
	ARROW_LEFT : 37,
	ARROW_UP : 38,
	ARROW_RIGHT : 39,
	ARROW_BOTTOM : 40
};
var	images = ['img/tank_base.png', 'img/tank_turret.png', 'img/bullet.png', 'img/explosion.png', 'img/enemy.png'];
var	size = 32;
var turnrate = 5;
var	canvas;
var	context;
var enemyCount = 3;
var enemies = [];
var playerBullets = [];
var enemyBullets = [];
var explosions = [];
var validEnemyDistance = 300;
  
// set canvas and get 2D context  
	canvas = document.getElementById('canvas');
	context = canvas.getContext("2d");

	canvas.width  = size * 20;
	canvas.height = size * 15;

	var centerX = (canvas.width - size) / 2;
	var centerY = (canvas.height - size) / 2;

// create & load player
	var	player = new Player(600, 400, loadImage(images[0]));

// create & load enemies
	for(var i = 0; i < enemyCount; i++){
		/* var area = {
			a : new Point(0, 0),
			b : new Point(340, 0),
			c : new Point(340, 240),
			d : new Point(0, 240)
		};
		authorizedArea */
		
		var enemy = new Enemy(100 * i + 50, 80, loadImage(images[4]));
		enemies.push(enemy);
	}

	function checkGameState(){
		if(enemies.length < 1 && player.alive) return true;
		if(!player.alive) return false;
	}

/********************** Game Loop ****************/
	function loopGame(){
		requestAnimFrame(loopGame);
		clearCanvas();	
		initListeners();
		
		updatePlayerBullets();
		updateEnemyBullets();
		updateEnemies();
		
		drawPlayerBullets();
		drawEnemyBullets();
		drawEnemies();
		drawPlayer();
		drawExplosions();	
	};

	loopGame();
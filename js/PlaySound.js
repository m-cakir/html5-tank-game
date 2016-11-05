// sound player html5 audio element
	var playSound = {
		create : function(){
			this.player = document.createElement("audio");
		},
		
		play : function(mp3){
			this.player.src = mp3;
			this.player.play();
		},
		
		fire : function(){
			playSound.play('sounds/fire.mp3');
		},
		
		explode : function(){
			playSound.play('sounds/explode.mp3');
		}
	};
	
	playSound.create();
class Boot extends Phaser.State {

	preload() {
		  this.game.load.image('sky', 'assets/sky.png');
			this.game.load.image('ground', 'assets/platform.png');
			this.game.load.image('star', 'assets/star.png');
			this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
			

	}

	create() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.state.start("Preload");
	}

}

export default Boot;
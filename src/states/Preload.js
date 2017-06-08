class Preload extends Phaser.State {

	

	

	

	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
		this.game.load.text('dictionary', '/assets/dictionary.txt',true);	 
		 console.log("dictionary");
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");

		 

	}

	init(){
        var me = this;
        var style = {
            font: "32px Arial",
            fill: "#ffffff",
            align: "center"
        };
        this.text = this.add.text(me.game.world.centerX, me.game.world.centerY, "Loading: 0%", style);
        this.text.anchor.x = 0.5;
	}

	fileLoaded(progress){
		this.text.text = "Loading: " + progress + "%";
	}

}

export default Preload;
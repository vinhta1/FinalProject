class Type extends Phaser.Scene {
    constructor() {
        super("typeScene");
    }

preload() {
    this.load.audio("scream","./assets/scream1.mp3");
}

    create(){
        console.log("test");
        backSpace = this.input.keyboard.addKey("BACKSPACE");   // adds backspace as a variable
        backSpace.on("down", () => {                            // checks for backspacing
            console.log("Deleting");
            this.sound.play("scream");
        });                               
    }

    update(){
    }
}
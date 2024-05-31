// get room size in game
// https://stackoverflow.com/questions/52139569/phaser-io-3-get-game-size-in-scene

class Type extends Phaser.Scene {
    constructor() {
        super("typeScene");
    }

preload() {
    this.canvas = this.sys.game.canvas;

    scene.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);


    this.load.audio("scream","./assets/scream1.mp3");
}

    create(){
        let { width, height } = this.canvas;
        // drawing circles
        // https://labs.phaser.io/edit.html?src=src/geom\circle\circumference.js
        const graphics = this.add.graphics({ lineStyle: { width: 3, color: 0xffffff }, fillStyle: { color: 0xfffffff } });
        var randX = Phaser.Math.Between(0, width);
        var randY = Phaser.Math.Between(0, height);
        var inputText = scene.add.rexInputText(x, y, width, height, config);

        console.log(width + ", " + height);
        backSpace = this.input.keyboard.addKey("BACKSPACE");    // adds backspace as a variable
        backSpace.on("down", () => {                            // checks for backspacing
            console.log("Deleting");
            this.sound.play("scream");
        });
        this.input.keyboard.on("keydown", (key) => {
            if (!backSpace.isDown){                             // if any key is pressed other than backspace
                // do this
                var color = Phaser.Display.Color.RandomRGB().color;
                graphics.fillStyle(color);
                var circle = new Phaser.Geom.Circle(randX, randY, 5, color);
                graphics.fillCircleShape(circle);
                randX += Phaser.Math.Between(-3,3);
                randY += Phaser.Math.Between(-3,3);
            }
        });                            
    }

    update(){

    }
}
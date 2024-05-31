// get room size in game
// https://stackoverflow.com/questions/52139569/phaser-io-3-get-game-size-in-scene
// text entry
// https://labs.phaser.io/edit.html?src=src/input\keyboard\text%20entry.js

class Type extends Phaser.Scene {
    constructor() {
        super("typeScene");
    }

preload() {
    this.canvas = this.sys.game.canvas;

    // this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);

    this.load.audio("scream","./assets/scream1.mp3");
}

    create(){
        let { width, height } = this.canvas;
        // drawing circles
        // https://labs.phaser.io/edit.html?src=src/geom\circle\circumference.js
        const graphics = this.add.graphics({ lineStyle: { width: 3, color: 0xffffff }, fillStyle: { color: 0xfffffff } });
        var randX = Phaser.Math.Between(0, width);
        var randY = Phaser.Math.Between(0, height);
        // var inputText = this.add.rexInputText(0, 0, width, height);
        // this.add.existing(inputText);

        const textEntry = this.add.text(10, 50, '', { font: '32px Courier', fill: '#ffff00', wordWrap: {width: this.game.config.width, useAdvancedWrap: true} });


        console.log(width + ", " + height);
        backSpace = this.input.keyboard.addKey("BACKSPACE");    // adds backspace as a variable
        backSpace.on("down", () => {                            // checks for backspacing
            console.log("Deleting");
            this.sound.play("scream");
        });
        this.input.keyboard.on("keydown", (event) => {
            if (!backSpace.isDown){                             // if any key is pressed other than backspace
                // do this
                var color = Phaser.Display.Color.RandomRGB().color;
                graphics.fillStyle(color);
                var circle = new Phaser.Geom.Circle(randX, randY, 5, color);
                graphics.fillCircleShape(circle);
                randX += Phaser.Math.Between(-3,3);
                randY += Phaser.Math.Between(-3,3);

                console.log(event.keyCode);
                if (event.keyCode === 8 && textEntry.text.length > 0)
                    {
                        textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
                    }
                    else if (event.keyCode === 32 || (event.keyCode >= 187 && event.keyCode <= 222) || (event.keyCode >= 48 && event.keyCode <= 90))
                    {
                        textEntry.text += event.key;
                    }
            }
        });                            
    }

    update(){

    }
}
// Vinh Ta

// input text
// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/inputtext/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Type],
    parent: divId,
    // fullscreenTarget: divId, // For fullscreen
    dom: {
        createContainer: true
    },
    input: {
        mouse: {
            target: divId
        },
        touch: {
            target: divId
        },
    },
}

let game = new Phaser.Game(config);
let backSpace;
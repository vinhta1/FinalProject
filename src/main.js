// Vinh Ta

// input text
// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/inputtext/

// import { TextEdit, Edit } from '/node_modules/phaser3-rex-plugins/plugins/inputtext-plugin.js';

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Type],
    //parent: divId,
    // fullscreenTarget: divId, // For fullscreen
    dom: {
        createContainer: true
    },
    // input: {
    //     mouse: {
    //         target: divId
    //     },
    //     touch: {
    //         target: divId
    //     },
    // },
    // plugins: {
    //     global: [{
    //         key: 'rexInputTextPlugin',
    //         plugin: InputTextPlugin,
    //         start: true
    //     }]
    // }
}

let game = new Phaser.Game(config);
let backSpace;
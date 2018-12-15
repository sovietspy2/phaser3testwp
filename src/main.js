import Phaser from 'phaser';
import {TestScene} from './scenes/testscene'

let game = new Phaser.Game({
    type: Phaser.AUTO,
            width: 800,
            height: 600,
            pixerArt: true,
            physics: {
               default: 'arcade',
               arcade: {
                    gravity: { y: 0 },
                    debug: true
                }
            },
            scene: TestScene,
            parent: "game"
});

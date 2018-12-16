import Phaser from 'phaser';
import TestScene from './scenes/testscene';
import WeaponPlugin from 'phaser3-weapon-plugin';

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
            plugins: {
                scene: [
                    { key: 'WeaponPlugin', plugin: WeaponPlugin, mapping: 'weapons' }
                ]
            },
            scene: TestScene,
            parent: "game"
});

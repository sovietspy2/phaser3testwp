import WeaponPlugin from 'phaser3-weapon-plugin';

export class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: "TestScene"
        });
    }

    preload() {
        this.load.image("bomb","./assets/bomb.png");
        this.load.scenePlugin('WeaponPlugin', WeaponPlugin, null, 'weapons');
        console.log("prelaoded");
    }

    create() {

        let scoreText = this.add.text(16, 16, 'TEST', { fontSize: '32px', fill: '#ffffff' });

        //  Creates 1 single bullet, using the 'bullet' graphic
        this.weapon = this.weapons.add(1, "bomb");

        // Enable physics debugging for the bullets
        this.weapon.debugPhysics = true;

        //  The bullet will be automatically killed when it leaves the world bounds
        console.log(`setting bulletKillType`);
        this.weapon.bulletKillType = WeaponPlugin.consts.KILL_WORLD_BOUNDS;

        //  Because our bullet is drawn facing up, we need to offset its rotation:
        this.weapon.bulletAngleOffset = 90;

        //  The speed at which the bullet is fired
        this.weapon.bulletSpeed = 400;

        this.sprite = this.add.sprite(320, 500, "bomb");
        //this.sprite.body.allowGravity = false;

        this.physics.add.existing(this.sprite);

        this.sprite.body.setDrag(70);
        this.sprite.body.maxVelocity.set(200);

        //  Tell the Weapon to track the 'player' Sprite
        this.weapon.trackSprite(this.sprite);

        ///////////////////////////////////

        const {R} = Phaser.Input.Keyboard.KeyCodes;
        this.keys = this.input.keyboard.addKeys({
            r: R
        });

        console.log("created");

    }

    update(time,delta) {

        this.weapon.fire();

        if (this.keys.r.isDown) {
            console.log("restarted");
             this.scene.restart();
           }
    }

}
import 'phaser';
import pkg from '../package.json';

const width = 1420;
const height = 800;

const config = {
    width,
    height,
    type: Phaser.AUTO,
    scene: { create }
};

const game = new Phaser.Game(config); 

function create() {
    const welcomeMessage = `Phaser Dev Starter`;
    

    this.add
        .text(10, 10, welcomeMessage, { font: "bold 24px Raleway", fill: "#ffff00" });

    this.add
        .text(width - 50, height - 30, `v${pkg.version}`, { font: "bold 14px Raleway", fill: "#ffff00" });
}
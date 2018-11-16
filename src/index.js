import 'phaser';
import pkg from '../package.json';

const width = 1420;
const height = 800;

const config = {
    width,
    height,
    type: Phaser.AUTO,
    scene: { preload, create }
};

const game = new Phaser.Game(config); 

function preload(){
    this.load.image('background', 'assets/background4.png'); 
}


// Main funciton of the game screen here 
function create() {
    const welcomeMessage = `Game Screen`;
    this.add.image(300 , 400,  'background'); 
    

    this.add
        .text(10, 10, welcomeMessage, { font: "bold 24px Raleway", fill: "#00000" });

    this.add
        .text(width - 50, height - 30, `v${pkg.version}`, { font: "bold 14px Raleway", fill: "#ffff00" });
}
var SDGame = {};

var frequency; 
var text;

SDGame.StateA = function (game) {

    this.player1;
    this.player2;
    this.tube;
    this.changeTimer;
    this.cursors;

};

SDGame.StateA.prototype = {

    preload: function () {

        this.load.image('player', 'assets/player.png');
        this.load.image('block', 'assets/enemy.png');
        this.load.image('tube', 'assets/tube.png');

        this.load.physics('physicsData', 'assets/sprites.json');

    },

    create: function () {

        this.game.stage.backgroundColor = '#806000';

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.tube = this.add.sprite(-80, 175, 'tube');
        this.player1 = this.add.sprite(43, 200, 'player');
        this.player2 = this.add.sprite(711, 200, 'block');
        

        this.game.physics.enable(this.player1, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.player2, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.tube, Phaser.Physics.ARCADE);

        this.tube.immovable = true;
        this.player1.body.velocity.x = 0;
        this.player2.body.velocity.x = -100;

        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.text(16, 16, 'Press Space to move forward', { font: '18px Arial', fill: '#ffffff' });
    },

    collisionCallback: function(obj1,obj2){

    this.game.stage.backgroundColor = '#992d2d';
    this.player2.body.velocity.x = -100;

    },

//    blockHit: function (body, shapeA, shapeB, equation) {

        //  We hit the wall, not a sprite
//        if (body === null) { return; }

//        if (body.sprite.key === 'player')
//        {
//           this.changeTimer = this.game.time.events.add(3000, this.gotoStateB, this);
//            this.game.paused = true;
//        }
//        else if (body.sprite.key === 'tube')
//        {
//           this.changeTimer = this.game.time.events.add(3000, this.gotoStateC, this);
//            this.game.paused = true;
//        }

//    },

    reset: function () {

        this.state.start('StateA');

    },

//    gotoStateC: function () {

//        this.state.start('StateC');

//    },

    update: function () {
        this.game.physics.arcade.collide(this.player1, this.player2, this.collisionCallback, false, this);
        this.player1.body.velocity.x = 0;
        if (this.cursors.right.isDown)
        {
            this.player1.body.velocity.x = 200;
        }
//        if (this.cursors.left.isDown)
//        {
//            this.game.paused = false;
//            this.changeTimer = this.game.time.events.add(3000, this.reset, this);
//        }
        if (this.player1.x < 43)
        {
            this.add.text(300,400,'Enemy wins!!!')
//            this.add.text(300,450,'Press Left Arrow to play again')
            this.game.paused = true;
        }

        if (this.player2.x > 711)
        {
            this.game.paused = true;
            this.add.text(300,400,'You win!!!')
//            this.add.text(300,450,'Press Left Arrow to play again')
        }

        if ((this.game.paused) && (this.cursors.left.isDown))
        {
                this.changeTimer = this.game.time.events.add(3000, this.reset, this);
        }


    },

    render: function () {

//        if (this.changeTimer)
//        {
//            this.game.debug.text('Changing in: ' + game.time.events.duration, 32, 32);
//        }
//        else
//        {
//            this.game.debug.text(this.result, 32, 32);
//        }

//        this.game.debug.text("State A", 32, 560);
        this.game.debug.text('Sprite 1 speed: ' + this.player1.body.velocity.x, 32, 64);
        this.game.debug.text('Sprite 2 speed: ' + this.player2.body.velocity.x, 32, 96);
        if (this.changeTimer)
        {
            this.game.debug.text('Reset in: ' + game.time.events.duration, 300, 470);
        }
    }

};

//StateB
SDGame.StateB = function (game) {

    this.changeTimer;
    this.cursors;
    this.freq;
};

SDGame.StateB.prototype = {

    preload: function () {
        this.player1;
        this.player2;
        this.tube;
        this.changeTimer;
        this.cursors;      
    },

    create: function () {
        this.game.stage.backgroundColor = '#806000';
        this.add.text(200, 150, 'Tap as fast as you can in 30 seconds!!!', { font: '26px Arial', fill: '#ffffff' });
        text = this.game.add.text(game.world.centerX, game.world.centerY, "- You have tapped -\n0 times !", {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
        });
        text.anchor.setTo(0.5, 0.5);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.freq = 0;
        frequency = 0;
    },

    gotoStateA: function () {

        this.state.start('StateA');

    },

    update: function () {
        this.input.onDown.addOnce(this.updateText, this);
        if (this.cursors.right.isDown)
        {   
            this.changeTimer = this.game.time.events.add(30000, this.gotoStateA, this);
//            this.freq = this.freq + 1;
            frequency++;
            text.setText("- You have tapped -\n" + frequency + " times !");
        }

    },

    updateText: function () {

        this.freq++;
        text.setText("- You have tapped -\n" + this.freq + " times !");

    },

    render: function () {
        if (this.changeTimer)
        {
//            this.game.debug.text('Number of taps: ' + freq , 300, 350);
            this.game.debug.text('Time: ' + game.time.events.duration, 300, 450);
        }

    }

};



var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');

game.state.add('StateA', SDGame.StateA);
game.state.add('StateB', SDGame.StateB);
//game.state.add('StateC', SDGame.StateC);

game.state.start('StateA');

let config = {
    type: Phaser.AUTO,
    Width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload (){
    this.load.image('sky', 'assets/images/space2.2.jpg');
    this.load.image('spaceCraft', 'assets/images/Untitled 3.png');
    this.load.image('laser', 'assets/images/laser.png');
}

var lasers;
var sprite;

function create (){
    this.add.image(400, 300, 'sky');
    mySprite = this.physics.add.image(270,450, 'spaceCraft');
    mySprite.setCollideWorldBounds(true)
    keyInputs = this.cursors = this.input.keyboard.addKeys(
        {up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D});


    // let logo = this.physics.add.image(400, 100, 'spacecraft');
    //
    // logo.setVelocity(500, 550);
    // logo.setBounce(1,1);
    // logo.setCollideWorldBounds(true);
    //
    // emitter.startFollow(logo);
}

function update (){
    if(keyInputs.left.isDown){
        mySprite.x = mySprite.x - 2;
        mySprite.setVelocityX(-160)
    }
    if(keyInputs.right.isDown){
        mySprite.x = mySprite.x + 2;
        mySprite.setVelocityX(160)
    }
    if(keyInputs.up.isDown){
        mySprite.y = mySprite.y - 2;
        mySprite.setVelocityY(-160)
    }
    if(keyInputs.down.isDown){
        mySprite.y = mySprite.y + 2;
        mySprite.setVelocityY(160)
    }
}



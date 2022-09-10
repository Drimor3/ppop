window.onload = ( () =>{
    let speedWall = 3;
    let sppedBallX = 4;
    let sppedBallY = 4;

    let app = new PIXI.Application({
        width: 800,
        height: 600,
    })
    document.body.appendChild(app.view)

    let wallLeft = new PIXI.Sprite.from('wall left.png')
    wallLeft.height = 100;
    wallLeft.width = 20;
    wallLeft.position.x = 10;
    wallLeft.position.y = 10;

    const gameContainer = new PIXI.Container();
    gameContainer.addChild(wallLeft)
    app.stage.addChild(gameContainer)

    document.addEventListener('touchstart', () =>{
        wallLeft.position.y += sppedBallY;
    })
})

window.onload = ( () =>{
    let speedWall = 3;
    let sppedBallX = 4;
    let sppedBallY = 4;
    let mover = [];
    let i = 0;
    const screenWidth = window.screen.width - 100;
    const screenHeight = window.screen.height - 200;

    let ticker = PIXI.Ticker.shared;
    ticker.autoStart = false;
    ticker.stop();
    ticker.start();

    let app = new PIXI.Application({
        width: screenWidth,
        height: screenHeight,
        margin: 0,
        padding: 0
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

    document.addEventListener('click', (george) =>{
            if(i === 0){
                ticker.add(()=>{
                    wallLeft.position.y += sppedBallY;
                })
                i++
            }
            else if(i > 0){
                ticker.add(()=>{
                    wallLeft.position.y -= (sppedBallY * 2);
                })
                i -=2
            }
            else if (i<0){
                ticker.add(()=>{
                    wallLeft.position.y += (sppedBallY * 2);
                })
                i +=2
            }

    })


})

window.onload = ( () =>{

    let arrmove = [-2, 2];
    let movesquareY = arrmove[Math.floor(Math.random()*(arrmove.length))];

    let arrmove2 = [-1, 1];
    let movesquareX = arrmove2[Math.floor(Math.random()*(arrmove2.length))];


    let speedWall = 3;
    let sppedBallX = 4;
    let sppedBallY = 4;
    let speedsquare = 5;
    let moveit = false;
    let i = 0;
    let ii = 0;
    let iii = 0;
    const screenWidth = 700;
    const screenHeight = 400;

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
    wallLeft.position.y = (screenHeight / 2) - (wallLeft.height / 2);

    let wallRight = new PIXI.Sprite.from('right wall.png')
    wallRight.height = 100;
    wallRight.width = 20;
    wallRight.position.x = screenWidth - wallRight.width - 10 ;
    wallRight.position.y = screenHeight / 2;

    let square = new PIXI.Sprite.from('square.png')
    square.height = 30;
    square.width = 30;
    square.position.x = screenWidth / 2;
    square.position.y = screenHeight / 2;

    const gameContainer = new PIXI.Container();
    gameContainer.addChild(wallLeft, wallRight, square)
    app.stage.addChild(gameContainer)

    document.addEventListener('touchend', (george) =>{
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

// document.addEventListener('keydown', (george) =>{
//             if(ii === 0){
//                 ticker.add(()=>{
//                     wallRight.position.y += sppedBallY;
//                 })
//                 ii++
//             }
//             else if(ii > 0){
//                 ticker.add(()=>{
//                     wallRight.position.y -= (sppedBallY * 2);
//                 })
//                 ii -=2
//             }
//             else if (ii<0){
//                 ticker.add(()=>{
//                     wallRight.position.y += (sppedBallY * 2);
//                 })
//                 ii +=2
//             }
//
//     })

    // тікер начала move it move it квадрата, і його зміна швидкості при ударяння в стенкі
    ticker.add(()=>{
    if(iii === 0){
        iii++
        ticker.add(()=>{
            square.position.x -= speedsquare * movesquareX;
            square.position.y += movesquareY;
        })
    }
    else if(wallLeft.position.x + wallLeft.width > square.position.x
        &&
        wallLeft.position.y + wallLeft.height > square.position.y
        &&
        wallLeft.position.y < square.position.y + square.width
        &&
        wallLeft.position.x < square.position.x + square.height)
    {
        ticker.add(()=>{
            square.position.x += speedsquare * 2
        })
    }
    else if(wallRight.position.x + wallRight.width > square.position.x
        &&
        wallRight.position.y + wallRight.height > square.position.y
        &&
        wallRight.position.y < square.position.y + square.width
        &&
        wallRight.position.x < square.position.x + square.height
    ){
        ticker.add(()=>{
            square.position.x -= speedsquare * 2
        })
    }
    })

    ticker.add(()=>{
        wallRight.position.y = square.position.y
        if(square.position.y > screenHeight - square.height){
            movesquareY = 0
            ticker.add(()=>{
                square.position.y -= 2
            })
        }
        else if(square.position.y < 0){
            movesquareY = 0
            ticker.add(()=>{
                square.position.y += 2
            })

        }
    })
    // document.addEventListener('keydown', ()=>{
    //     console.log(square.position.y)
    // })
})

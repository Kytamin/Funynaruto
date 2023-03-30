let myPlayer = new Player(30, 30, 'black', 200, 120, 3, 0, 0, 0.93, 0.1); //////////added friction and gravity values
let myGameArea = new GameArea();
let myCoin = new Coin(100, 75, 5, 0, 2 * Math.PI, 'red');
let myObstacle = new Obstacle(30, 30, 'red', 0, 90, 3, 0, 0, 1, 0);
let myGame = new Game(myPlayer, myGameArea, myCoin, myObstacle);
myGame.startGame();
myGame.updateGame();
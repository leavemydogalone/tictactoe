let playerOne;
let playerTwo;
const playerFactory = (name) => {
    const playerName = name;
    let playerScore = 0;
    return {
        playerName,
        playerScore,
    }
};
const newPlayer = (() => {
    let newPlayerButton = document.querySelector('.header').querySelector('button');
    const addNewPlayers = () => {
        let askName1 = prompt('What is the name of first player', '');
        if (askName1 === null || askName1 === "") askName1 = "Player 1";
        playerOne = playerFactory(askName1);
        let askName2 = prompt('What is your name', '');
        if (askName2 === null || askName2 === "") askName2 = "Player 2";
        playerTwo = playerFactory(askName2);
    };
    window.onload = addNewPlayers();
    newPlayerButton.addEventListener('click', addNewPlayers);

    
})();
const game = (() => {
    let gameboard = ["q","p","","a","b","c","d","e","f"];
    let playerTurn = false;
    let arrayMarker;
    let squareButton = document.querySelector('.container').querySelectorAll('button');
    const turnChange = () => {
        (playerTurn) ?  playerTurn = false : playerTurn = true;
    };
    squareButton.forEach((button) => {
        button.addEventListener('click', function(e) {
            (playerTurn) ? arrayMarker = 'x' : arrayMarker = 'o';
            gameboard.splice((parseInt(`${button.id}`) - 1), 1, arrayMarker);
            console.log(gameboard);
            (playerTurn) ? e.target.textContent = 'X' : e.target.textContent = 'O';
            endCheck();
            turnChange();
        });
    });
    const endCheck = () => {
        if ((gameboard[0] === gameboard[1] && gameboard [1] === gameboard [2]) ||
        (gameboard[3] === gameboard [4] && gameboard[4] === gameboard[5]) ||
        (gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8])||
        (gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6]) ||
        (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7]) ||
        (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8]) ||
        (gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8]) ||
        (gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6])) {
            gameEnd();
        }
    };
    const gameEnd = () => {
        if (playerTurn) {
            playerTwo.playerScore += 1;
            alert ('Player 2 wins!');
        } else { 
            playerOne.playerScore += 1;
            console.log ('Player 1 wins!');
        };
        gameboard = ["q","p","","a","b","c","d","e","f"];
        playerTurn = false;
    };
    return {
        gameboard,
        arrayMarker
    };
})();

const displayController = (() => {
    const render = () => {

    }
})();



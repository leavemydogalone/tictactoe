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
    let newPlayerButton = document.querySelector('#newPlayer');
    const addNewPlayers = () => {
        let askName1 = prompt('What is the name of first player', '');
        if (askName1 === null || askName1 === "") askName1 = "Player 1";
        playerOne = playerFactory(askName1);
        let askName2 = prompt('What is your name', '');
        if (askName2 === null || askName2 === "") askName2 = "Player 2";
        playerTwo = playerFactory(askName2);
        displayController.render();
    };
    newPlayerButton.addEventListener('click', addNewPlayers);
    return {
        addNewPlayers,
    };
    
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
            if(playerOne === undefined) return alert ('Please add players to the game');
            if(e.target.textContent === 'X' || e.target.textContent === 'O') {
                return alert ('Please pick an unoccupied spot')
            };
            (playerTurn) ? arrayMarker = 'x' : arrayMarker = 'o';
            gameboard.splice((parseInt(`${button.id}`) - 1), 1, arrayMarker);
            e.target.style.color = 'black';
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
            alert (`${playerTwo.playerName} wins!`);
        } else { 
            playerOne.playerScore += 1;
            alert (`${playerOne.playerName} wins!`);
        };
        gameboard = ["q","p","","a","b","c","d","e","f"];
        playerTurn = false;
        displayController.render();
    };
    const reset = (() => {
        const resetButton = document.querySelector('#resetGame');
        const resetFunc = () => {
            gameboard = ["q","p","","a","b","c","d","e","f"];
            playerTurn = false;
            let container = document.querySelector('.container').querySelectorAll('button');
            container.forEach((button) => {
                button.textContent = "''";
                button.style.color = 'transparent';
            });
        };
        resetButton.addEventListener('click', resetFunc);
        return {
            resetFunc,
        };
    })();
    return {
        gameboard,
        arrayMarker,

    };
})();

const displayController = (() => {
    let pOneScore = document.querySelector('.scoreDisplay1').querySelector('.score');
    let pOneName = document.querySelector('.scoreDisplay1').querySelector('.names');
    let pTwoScore = document.querySelector('.scoreDisplay2').querySelector('.score');
    let pTwoName = document.querySelector('.scoreDisplay2').querySelector('.names');
    
    const updateScore = (display, player) => {
        display.textContent = `Score: ${player.playerScore}`;
    };
    const updateName = (display, player) => {
        display.textContent = `${player.playerName}`
    };
    const render = () => {
        updateScore(pOneScore, playerOne);
        updateScore(pTwoScore, playerTwo);
        updateName(pOneName, playerOne);
        updateName(pTwoName, playerTwo);
        console.log('hello');
    };
    return {
        render,
    }
})();



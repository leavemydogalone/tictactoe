const gameboard = ["","","","","","","","",""];
const playerFactory = name => {
    // const playerScore = 0; maybe i just need to prototype this.
    const win = () => {
        playerScore++;
        alert ('You win!')
    };
    playerFactory.prototype.playerScore = 0;
    return {win};
};
const computer = () => {
    const {win} = playerFactory();
    const score = () => {
        alert ('score')
    };
    
};
const newPlayer = () => {

}

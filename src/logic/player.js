class Player{
    constructor(playerName, board){
        this.playerName = playerName;
        this.board=board;
    }
    attack(enemyBoard, row, colmn){
        return enemyBoard.receiveAttack(row, colmn);
        
    }
}
export {Player};
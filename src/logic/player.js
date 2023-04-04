class Player{
    constructor(playerName, board){
        this.playerName = playerName;
        this.board=board;
    }
     attack(enemyBoard, row, colmn){
      
          enemyBoard.receiveAttack(enemyBoard, row, colmn);
         
        
    }
    
}

export {Player};
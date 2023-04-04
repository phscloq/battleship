class Player{
    constructor(playerName, board){
        this.playerName = playerName;
        this.board=board;
    }
     attack(enemyBoard, row, colmn){
      
          return enemyBoard.receiveAttack(enemyBoard, row, colmn);
         
        
    }
    
}

export {Player};
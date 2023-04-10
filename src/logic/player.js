class Player{
    constructor(playerName, board){
        this.playerName = playerName;
        this.board=board;
        this.attackedCells=[];
    }
     attack(enemyBoard, row, colmn){
        
        if(this.attackedCells.some((e)=>e[0]==row && e[1]==colmn)){
            console.log("This cell has already been attacked!");
            document.getElementById('moveText').textContent=`This cell has already been attacked`;
            setTimeout(()=>{document.getElementById('moveText').textContent=`Please make a new move!`},1000);

            return false;
        }
        else{
            this.attackedCells.push([row, colmn]);
            return setTimeout(()=>{enemyBoard.receiveAttack(enemyBoard, row, colmn)},1000);

        }
         
        
    }
    
}

export {Player};
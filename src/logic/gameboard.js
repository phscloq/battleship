class Board{
    constructor(rows, cols, ship, currentShips){
        this.rows = rows;
        this.cols = cols;
        this.userMap = this.createBoard(rows, cols)
        this.missAttacks= [];
        this.ship = ship;
        this.currentShips=currentShips;
    }
    createBoard(rows, cols){
        const board=[];
        for(let i=0; i<rows; i++){
        const row=[];
        for(let j=0; j<cols; j++){
            row.push(
                {
                    occupied: false,
                    hit: false,
                    ship:null,
                });
        }
        board.push(row);

    }
    return board;
}

    placeShip(ship, row, colm, rotation){
        if(rotation=='right'){
            for(let i=colm; i<colm+ship.length; i++){
                this.userMap[row][i].occupied=true;
                this.userMap[row][i].ship=ship;
            }
        }
        else{
            for(let i=row; i<row+ship.length; i++){
                this.userMap[i][colm].occupied=true;
                this.userMap[i][colm].ship=ship;
            }
        }
     
    }
    
    receiveAttack(x, y){
        if(this.userMap[x][y].occupied==true){
            const model = this.userMap[x][y].ship.type
            const index = this.ship.findIndex(a=>a.type==model);
            this.ship[index].hit(x,y);
            this.isAllShipsSunked();
            return "It's a hit!";
        }
        else{
            this.missAttacks.push([x, y]);
            return `Miss at ${x} | ${y}`;
        }
  
    }
    isAllShipsSunked(){
        if(this.currentShips!=0){
          
        
        for(let i=0; i<this.ship.length; i++){
            if(this.ship[i].sunk==true){
                this.currentShips= this.currentShips-1;
            }
        }
    }
        if(this.currentShips>0){
        return false;    
        }
        else{  return true;}
    
    }

}
export {Board};
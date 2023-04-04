import { hitDom } from "./dom";
import { Ship } from "./ship";
import { Game } from "./game";
class Board{
    constructor(id,rows, cols, ship, currentShips){
        this.id=id;
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
    
    receiveAttack(board, row, colmn){
        console.log(this.ship);
        console.log(row);
        console.log(colmn);
        if(this.userMap[row][colmn].occupied==true){
            const model = this.userMap[row][colmn].ship.type
            const index = this.ship.findIndex(a=>a.type==model);
            this.ship[index].hit(row, colmn);
            
           
            hitDom(board, row, colmn);
            
            console.log("It's a hit!");
            return this.isAllShipsSunked();
        }
        else{
            this.missAttacks.push([row, colmn]);
            console.log(`Miss at ${row} | ${colmn}`);
        }
  
    }
    isAllShipsSunked(){
        let sunked=0;
       /*  console.log(this.ship); */
        for(let i=0; i<this.ship.length; i++){
      
            if(this.ship[i].isSunk()==true){
                sunked++;
  
            }
        }
        if(sunked==this.ship.length){
            return true;
        }
        else{
            return false;}
    }

}
export {Board};
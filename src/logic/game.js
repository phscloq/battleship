/* const ship = new Ship('carrier');
const ship1 = new Ship('battleship');
const ship2 = new Ship('cruiser');
const ship3 = new Ship('submarine');
const ship4 = new Ship('destroyer');
const ships=[ship, ship1, ship2, ship3, ship4];
const ships2= [ship, ship1, ship2, ship3, ship4];
const userBoard = new Board(10, 10, ships, ships.length);
const compBoard = new Board(10, 10, ships2, ships2.length);
userBoard.placeShip(ship, 2, 1, 'right');
userBoard.placeShip(ship1, 0,5, 'right');
userBoard.placeShip(ship2, 7, 1, 'right');
userBoard.placeShip(ship3, 5,7, 'bottom'); 
userBoard.placeShip(ship4, 9, 5, 'right');

compBoard.placeShip(ship, 3,0, 'right');
compBoard.placeShip(ship1, 5, 7, 'bottom');
compBoard.placeShip(ship2, 7,2, 'bottom');
compBoard.placeShip(ship3, 1, 7, 'right');
compBoard.placeShip(ship4, 0,2, 'right');

const user1= new Player('Ben', userBoard);
const user2= new Player('comp', compBoard);
const game=new Game(user1,user2,userBoard, compBoard); */
console.log("Working"); 
import { Ship } from "./ship.js";
import { Board } from "./gameboard.js";
import { Player } from "./player.js";
let turn=0;

class Game{
    constructor(player1, player2, board1, board2){
        this.player1=player1;
        this.player2=player2;
        this.board1=board1;
        this.board2=board2;
    }
    async play(){
        let currentPlayer=this.player1;
        let currentBoard = this.board2;
        while(!this.gameEnd(currentBoard, currentPlayer)){
            
            if(currentPlayer==this.player1){
           
                const {row, colmn}= await this.getUserClick(currentBoard);
                this.player1.attack(currentBoard, row, colmn);
                currentPlayer=this.player2;
                currentBoard=this.board1;

            }
            else{
                const {row, colmn}= await this.getUserClick(currentBoard);
                this.player2.attack(currentBoard, row, colmn);
                currentPlayer=this.player1;
                currentBoard=this.board2;
     
            }

        }
       
        /* this.declareWinner() */
    }
    getUserClick(currentBoard){
        return new Promise(resolve=>{
            document.getElementById(currentBoard.id).addEventListener('click', (e)=>{
            
                const row =  e.target.getAttribute('datax');
                const colmn =  e.target.getAttribute('datay');
                resolve({row, colmn});
        })
        })
       
}
    gameEnd(board, winner){
        
       if(board.isAllShipsSunked()){
        console.log("Game Over");
        console.log(winner);
        console.log(board);
        return true;
       }
    }
}
export {Game};
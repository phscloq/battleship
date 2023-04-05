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
import { hidden, show } from "./dom.js";
let turn=0;
let hitRow; let r; let c;
let hitColmn;
class Game{
    constructor(player1, player2, board1, board2, playType){
        this.player1=player1;
        this.player2=player2;
        this.board1=board1;
        this.board2=board2;
        this.playType=playType; 
    }
    async play(){
        let currentPlayer=this.player1;
        let currentBoard = this.board2;
        hidden('cBoard');
        while(!this.gameEnd(currentBoard, currentPlayer)){
        
            if(currentPlayer==this.player1){
           
                const {row, colmn}= await this.getUserClick(currentBoard);
                if(this.player1.attack(currentBoard, row, colmn)){
                    this.gameEnd(currentBoard, currentPlayer);
                    
                    break;
                }
                currentPlayer=this.player2;
                currentBoard=this.board1;

            }
            else{
                if(this.playType=='vsAI'){
                this.aiMove(currentBoard, currentPlayer);
                }
                else if(this.playType=='vsP2'){
                    console.log("Player 2's turn")
                    console.log(currentBoard);
                    const {row, colmn}= await this.getUserClick(currentBoard);
                    if(this.player2.attack(currentBoard, row, colmn)){
                        this.gameEnd(currentBoard, currentPlayer);
                        break;
                    }  
                    currentPlayer=this.player1;
                    currentBoard=this.board2; 
                }
               
     
            }
            document.querySelector('#finishedMove').addEventListener('click', ()=>{
                if(currentPlayer==this.player1){
                    hidden('pBoard');
                    show(this.board1);
                 
                }
                else if(currentPlayer==this.player2){
                    hidden('cBoard');
                    show(this.board2);
                    
                }
            });
        }
       
      
    }
    aiMove(currentBoard, currentPlayer){
        
        if(hitRow==undefined){
         r=Math.floor(Math.random()*10);
         c=Math.floor(Math.random()*10);}
        else if(hitRow==r && currentBoard.missAttacks[currentBoard.missAttacks.length-1][0]==hitRow+1){
            r=hitRow+1;
        }
        else if(r==hitRow+1){
                r=hitRow-1;
        }
        
        if(this.player2.attack(currentBoard, r, c)){
           
            hitRow=r;
            hitColmn=c;
            this.gameEnd(currentBoard, currentPlayer);
        }
        console.log(currentBoard.missAttacks);
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
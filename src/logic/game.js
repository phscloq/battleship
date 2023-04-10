import { hidden, show, endScreen} from "./dom.js";

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
        let clicked=true;
      
        while(!this.gameEnd(currentBoard, currentPlayer)){

            const {player, targetBoard} = this.turn(currentPlayer, currentBoard);
            

            const {row, colmn}= await this.getUserClick(currentBoard);
            console.log("currentboard and user is:");
            console.log(currentBoard);
            console.log(currentPlayer);
           
            console.log("*****************");

                document.querySelector('#finishedMove').addEventListener('click', ()=>{
                    clicked=true;
                    if(currentPlayer==this.player1){
                     
                        hidden('cBoard');
                        document.querySelector('#finishedMove').textContent= "Curtain!";
                      
                        setTimeout(()=>{show(this.board1)}, 1000);
                        setTimeout(()=>{document.querySelector('#finishedMove').textContent='Finished Move'}, 1000);
                        setTimeout(()=>{document.getElementById('moveText').textContent=`${currentPlayer.playerName} is going to make a move`;
                    }, 1000)

                    } else if(currentPlayer==this.player2){
                      
                        hidden('pBoard');
                        
                        
                        document.querySelector('#finishedMove').textContent= "Curtain!";
                        setTimeout(()=>{show(this.board2)}, 1000);
                        setTimeout(()=>{document.querySelector('#finishedMove').textContent='Finished Move'}, 1000);
                        setTimeout(()=>{document.getElementById('moveText').textContent=`${currentPlayer.playerName} is going to make a move`;
                    }, 1000)
                    }
        
                });
                if(clicked==true){
                   
                    document.getElementById('moveText').textContent=`${currentPlayer.playerName} is attacking...`;
                if(currentPlayer.attack(currentBoard, row, colmn)){
                    this.gameEnd(currentBoard, currentPlayer);           
                    currentPlayer=player;              
                    currentBoard=targetBoard;
                    clicked=false;
                }
                    /* notClickable(currentBoard, row, colmn); */
                    

                }
        }
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
 
        turn(player, targetBoard){
            console.log("turn called")
            if(player==this.player1){
               
                player=this.player2;
                targetBoard=this.board1;
                return {player, targetBoard};
                
            }
            else if(player==this.player2){
                player=this.player1;
                targetBoard=this.board2;
                
                return {player, targetBoard};
                
            }
           
            
        }
    gameEnd(board, winner){
        
       if(board.isAllShipsSunked(board)){
        endScreen();
        return true;
       }
    }
}
export {Game};
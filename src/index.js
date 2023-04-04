import { Ship } from "./logic/ship.js";
import { Board } from "./logic/gameboard.js";
import { Player } from "./logic/player.js";
import { Game } from "./logic/game.js";
import './style.css';

const main = document.createElement('div');
const playerBoardDiv= document.createElement('div');
const player2BoardDiv= document.createElement('div');
main.setAttribute('id', 'main');
playerBoardDiv.setAttribute('id', 'pBoard');
player2BoardDiv.setAttribute('id', 'cBoard');
playerBoardDiv.classList.add('board')
player2BoardDiv.classList.add('board')
main.append(playerBoardDiv, player2BoardDiv);
const body=document.querySelector('body');
body.appendChild(main);


const ship = new Ship('carrier');
const ship1 = new Ship('battleship');
const ship2 = new Ship('cruiser');
const ship3 = new Ship('submarine');
const ship4 = new Ship('destroyer');

const ship5 = new Ship('carrier');
const ship6 = new Ship('battleship');
const ship7 = new Ship('cruiser');
const ship8 = new Ship('submarine');
const ship9 = new Ship('destroyer');
const ships=[ship, ship1, ship2, ship3, ship4];
const ships2=[ship5, ship6, ship7, ship8, ship9];
const userBoard = new Board('pBoard', 10, 10, ships, ships.length);
const compBoard = new Board('cBoard', 10, 10, ships2, ships.length);
userBoard.placeShip(ship, 2, 1, 'right');
userBoard.placeShip(ship1, 0,5, 'right');
userBoard.placeShip(ship2, 7, 1, 'right');
userBoard.placeShip(ship3, 5,7, 'bottom'); 
userBoard.placeShip(ship4, 9, 5, 'right');

compBoard.placeShip(ship5, 3,0, 'right');
    compBoard.placeShip(ship6, 5, 7, 'bottom');
    compBoard.placeShip(ship7, 7,2, 'bottom');
    compBoard.placeShip(ship8, 1, 7, 'right');
    compBoard.placeShip(ship9, 0,2, 'right');


createBoard(userBoard, playerBoardDiv, 'pBoard');
createBoard(compBoard, player2BoardDiv, 'cBoard');
const player= new Player('user', userBoard);
const computer= new Player('Computer', compBoard);


function createBoard(boardName, divName, boardID){
    
    for(let i=0; i<boardName.userMap.length; i++){
        for(let j=0; j<boardName.userMap[i].length; j++){
            let cell=document.createElement('div');
            cell.setAttribute(`dataX`, i);
            cell.setAttribute('dataY', j);
            cell.classList.add('cell');
            cell.setAttribute('id', boardID);
            if(boardName.userMap[i][j].occupied==true){
            cell.classList.add('occupied')
            cell.innerText= boardName.userMap[i][j].ship.type;
            }
            
            divName.appendChild(cell);
        }
}

}
const game=new Game(player,computer,userBoard,compBoard);
game.play();
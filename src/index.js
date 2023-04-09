import { Game } from "./logic/game.js";
import { createBoard } from "./logic/default.js";
import { Ship } from "./logic/ship.js";
import { Board } from "./logic/gameboard.js";
import { Player } from "./logic/player.js";
import { endScreen } from "./logic/dom.js";
import './style.css';

const main = document.createElement('div');
const playerBoardDiv= document.createElement('div');
const player2BoardDiv= document.createElement('div');
const boards = document.createElement('div');
main.setAttribute('id', 'main');
playerBoardDiv.setAttribute('id', 'pBoard');
player2BoardDiv.setAttribute('id', 'cBoard');
playerBoardDiv.classList.add('board')
player2BoardDiv.classList.add('board')
boards.setAttribute('id', 'boards');
boards.append(playerBoardDiv, player2BoardDiv);
const body=document.querySelector('body');
body.appendChild(main);

const playSettings= document.createElement('div');
const welcomeTitlte= document.createElement('h1');
const playTypes=document.createElement('div');
const vsAI=document.createElement('button');
const vsP2=document.createElement('button');
const finishedMove=document.createElement('button');
finishedMove.innerText='Finished Move';
finishedMove.setAttribute('id', 'finishedMove');
welcomeTitlte.innerText='Battleship';
vsAI.innerText='Player Vs. AI';
vsP2.innerText='Player Vs. Player';
playSettings.setAttribute('id', 'settings');
playTypes.setAttribute('id', 'buttonsDiv');
vsAI.setAttribute('id', 'vsAI');
vsP2.setAttribute('id', 'vsP2');
playTypes.append(vsAI, vsP2);
playSettings.append(welcomeTitlte, playTypes);
main.append(playSettings,boards, finishedMove);

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


document.getElementById('vsAI').addEventListener('click', ()=>{
    document.getElementById('settings').style.display='none';
    const boards = document.querySelector('#boards');
    boards.style.display='flex';
   
    const game=new Game( player,computer,userBoard,compBoard, 'vsAI');
    game.play();
})
document.getElementById('vsP2').addEventListener('click', ()=>{
    document.getElementById('settings').style.display='none';
    const boards = document.querySelector('#boards');
    boards.style.display='flex';
    document.querySelector('#finishedMove').style.display='block';
  
    const game=new Game(player,computer,userBoard,compBoard, 'vsP2');
    const rematch = document.createElement('button');
    rematch.setAttribute('id', 'rematch');
    rematch.innerText = 'Rematch';
    rematch.style.display = 'none';
    main.appendChild(rematch);
    console.log(rematch);
    game.play();
  
})
 
function newGame(){
    const game=new Game(player,computer,userBoard,compBoard, 'vsP2');
    game.play();
}

export {newGame};
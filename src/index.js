import { Game } from "./logic/game.js";
import { createBoard } from "./logic/default.js";
import { getDefaultPlayers } from "./logic/default.js";
import './style.css';

const main = document.createElement('div');
/**************GAME SCREEN HTML**************/
const playerBoardDiv= document.createElement('div');
const player2BoardDiv= document.createElement('div');
const boards = document.createElement('div');
const finishedMove=document.createElement('button');
const moveDescribe=document.createElement('p');
    main.setAttribute('id', 'main');
    playerBoardDiv.setAttribute('id', 'pBoard');
    player2BoardDiv.setAttribute('id', 'cBoard');
    playerBoardDiv.classList.add('board')
    player2BoardDiv.classList.add('board')
    boards.setAttribute('id', 'boards');
    finishedMove.setAttribute('id', 'finishedMove');
    moveDescribe.classList.add('moveText');
    moveDescribe.setAttribute('id', 'moveText');
    finishedMove.innerText='Finished Move';

boards.append(playerBoardDiv, player2BoardDiv);
const body=document.querySelector('body');
body.appendChild(main);
/**************WELCOME SCREEN**************/
const playSettings= document.createElement('div');
const playTypes=document.createElement('div'); //BUTTON'S DIV
const welcomeTitlte= document.createElement('h1');
const vsAI=document.createElement('button');
const vsP2=document.createElement('button');
    welcomeTitlte.innerText='Battleship';
    vsAI.innerText='Player Vs. AI';
    vsP2.innerText='Player Vs. Player';
    playSettings.setAttribute('id', 'settings');
    playTypes.setAttribute('id', 'buttonsDiv');
    vsAI.setAttribute('id', 'vsAI');
    vsP2.setAttribute('id', 'vsP2');
playTypes.append(vsAI, vsP2);
playSettings.append(welcomeTitlte, playTypes);
main.append(playSettings,moveDescribe, boards, finishedMove);


document.getElementById('vsAI').addEventListener('click', ()=>{
    document.getElementById('settings').style.display='none';
    const boards = document.querySelector('#boards');
    boards.style.display='flex';
   
    
})
document.getElementById('vsP2').addEventListener('click', ()=>{
    document.getElementById('settings').style.display='none';
    const boards = document.querySelector('#boards');
    boards.style.display='flex';
    document.querySelector('#finishedMove').style.display='block';
  
   
    const rematch = document.createElement('button');
    rematch.setAttribute('id', 'rematch');
    rematch.innerText = 'Rematch';
    rematch.style.display = 'none';
    main.appendChild(rematch);
    console.log(rematch);
    newGame();
  
})
 
function newGame(){
    const {
        player,
        computer,
        userBoard,
        compBoard
    } = getDefaultPlayers();
    createBoard(userBoard, playerBoardDiv, 'pBoard');
    createBoard(compBoard, player2BoardDiv, 'cBoard');
    const game=new Game(player,computer,userBoard,compBoard, 'vsP2');
    game.play();
}

export {newGame};
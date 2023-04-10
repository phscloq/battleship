import { Game } from "./game";
import { Board } from "./gameboard";
import { createBoard } from "./default";
import { newGame } from "..";
function hitDom(board, row, colmn){
    const cell=  document.querySelector(`[datax="${row}"][datay="${colmn}"][id="${board.id}"]`);
    cell.classList.add('hit');
}
function missDom(board, row, colmn){
    const cell=  document.querySelector(`[datax="${row}"][datay="${colmn}"][id="${board.id}"]`);
    cell.classList.add('missed');
}
function endScreen(player, computer, userBoard, compBoard){
    console.log('endScreen called');
    document.getElementById('finishedMove').style.display='none';
    document.getElementById('rematch').style.display='block';
/*     const main = document.getElementById('main'); */
    if(document.getElementById('rematch')){
        const rematch= document.querySelector('#rematch');
    rematch.addEventListener('click', ()=>{ 
        console.log('clicked');
       
        
       
     clearBoard(userBoard);
     clearBoard(compBoard);
        newGame();
    });
    
    }

}
function clearBoard(board){
  
    for(let i=0; i<board.userMap.length; i++){
        for(let j=0; j<board.userMap[i].length; j++){
            if(board.userMap[i][j].occupied==true){
                const cell= document.querySelector(`[datax="${i}"][datay="${j}"][id="${board.id}"]`);
            if(cell.classList.contains('hit')){
                cell.classList.remove('hit');
            }
            else if(cell.classList.contains('missed')){
                cell.classList.remove('missed');
            }
            }}}

        
}

function hidden(board){
    console.log(board);
const boardDiv = document.getElementById(board);
for(let i=0; i<boardDiv.childNodes.length; i++){
    if(!boardDiv.childNodes[i].classList.contains('sunked')){
        
    boardDiv.childNodes[i].innerHTML='';
    }
    boardDiv.childNodes[i].classList.remove('occupied');
}
}
function show(board){
    console.log('show');
    console.log(board);
    const boardDiv = document.getElementById(board.id);
    let cell;
    
    for(let i=0; i<board.userMap.length; i++){
        for(let j=0; j<board.userMap[i].length; j++){
            if(board.userMap[i][j].occupied==true){
                cell= document.querySelector(`[datax="${i}"][datay="${j}"][id="${board.id}"]`);
            cell.classList.add('occupied')
            cell.innerText= board.userMap[i][j].ship.type;
            }

        }
}
    }
    function sunkedShip(board, hitsArr, ship){
        console.log(board);
        console.log(hitsArr);
        for(let i=0; i<hitsArr.length; i++){
           let cell= document.querySelector(`[datax="${hitsArr[i][0]}"][datay="${hitsArr[i][1]}"][id="${board.id}"]`);
            cell.innerText = ship.type;
            cell.classList.add('sunked');
        }
    }



export {hitDom, missDom, hidden, endScreen, show, sunkedShip};
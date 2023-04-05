import { Game } from "./game";
import { Board } from "./gameboard";

function hitDom(board, row, colmn){
    const cell=  document.querySelector(`[datax="${row}"][datay="${colmn}"][id="${board.id}"]`);
    cell.classList.add('hit');
}
function missDom(board, row, colmn){
    const cell=  document.querySelector(`[datax="${row}"][datay="${colmn}"][id="${board.id}"]`);
    cell.classList.add('missed');
}
function endScreen(winner){

}
function hidden(board){
    console.log(board);
const boardDiv = document.getElementById(board);
for(let i=0; i<boardDiv.childNodes.length; i++){

    boardDiv.childNodes[i].innerHTML='';
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
export {hitDom, missDom, hidden, show};
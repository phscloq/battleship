import { Game } from "./game";
import { Board } from "./gameboard";

function hitDom(board, row, colmn){
    const cell=  document.querySelector(`[datax="${row}"][datay="${colmn}"][id="${board.id}"]`);
    cell.classList.add('hit');

/* const cell=  document.querySelector(`[datax="${x}"][datay="${y}"][id="${board.id}"]]`);
cell.classList.add('hit'); */

}
export {hitDom};
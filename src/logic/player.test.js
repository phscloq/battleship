import { Ship } from "./ship";
import {Board} from "./gameboard"
import { Player } from "./player";
const ship = new Ship('carrier');
const ship1 = new Ship('battleship');
const ship2 = new Ship('cruiser');
const ship3 = new Ship('submarine');
const ship4 = new Ship('destroyer');
let turn=0;
var userBoard;
let compBoard;
beforeEach(()=>{
    const ships=[ship, ship1, ship2, ship3, ship4];
    const ships2= [ship, ship1, ship2, ship3, ship4];
    userBoard = new Board(10, 10, ships, ships.length);
    compBoard = new Board(10, 10, ships2, ships2.length);
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
});
test('player starts the attack', ()=>{
   
    expect(compBoard.receiveAttack(3,0)).toBe("It's a hit!");
    
        
    
})
turn=1;
test('player attacks with its method', ()=>{
    const player = new Player('Ben', userBoard);
    expect(player.attack(compBoard, 3, 3)).toBe("It's a hit!");    
})
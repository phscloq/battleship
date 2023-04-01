
import { Board } from "./gameboard";
import { Ship } from "./ship";
let board;
let ship;
beforeEach(()=>{
    ship = new Ship('battleship');
    const ship2 = new Ship('submarine');
    const ships=[ship, ship2];
    board = new Board(10, 10, ships, ships.length);
    board.placeShip(ship, 1, 1, 'right');
    board.placeShip(ship2, 3,0, 'bottom');
});

test('board is initialized with correct dimensions', ()=>{
  const boardT = new Board(10, 10);
  expect(boardT.userMap[1][1]).toEqual({occupied: false, hit:false, ship:null});
})

test('ship placement on the board', ()=>{

    expect(board.userMap[1][4].occupied).toBe(true);
})
test('getting the type of ship at the right coordinates', ()=>{
    expect(board.userMap[4][0].ship.type).toBe("submarine");
})
test('receive attack to a specific coordinates', ()=>{
    
expect(board.receiveAttack(1,1)).toEqual("It's a hit!");
})

test('receiving an attack on a ship saved inside the ship object', ()=>{
    board.receiveAttack(1, 1)
    expect(board.ship[0].hits).toEqual([[1,1]]);
})

test('board has two ships', ()=>{
    expect(board.ship.length).toEqual(2);
})
test('shows missed attacks', ()=>{
    board.receiveAttack(0,0);
    board.receiveAttack(0, 1)
    board.receiveAttack(5, 6)
    board.receiveAttack(5, 7)
    expect(board.missAttacks).toEqual([[0,0],[0,1],[5,6],[5,7]])

})
test('all ships sunked', ()=>{
    board.currentShips=0;
    expect(board.isAllShipsSunked()).toBe(true);
})

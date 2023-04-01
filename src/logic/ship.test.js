
import { Ship } from "./ship";
let ship;
beforeEach(()=>{
    ship = new Ship('battleship');
});


test('to see if we create ship objects', ()=>{
   
   expect(ship instanceof Ship).toBe(true);
})
test('ship have no damage at the beginning', ()=>{
   
    expect(ship.hits.length).toBe(0);
})
test('ship lengths equal 4', ()=>{

    expect(ship.length).toBe(4);
 })

test('if ship takes hits', ()=>{
    ship.hit([0][0]);
    expect(ship.hits.length).toBe(1);
})

test('if ship sunks', ()=>{
    ship.hit([3][2]);
    ship.hit([0][2]);
    ship.hit([2][2]);
    ship.hit([1][2]);
    expect(ship.sunk).toBe(true);
  
})
test('ship hits should shot the coordinates of hits', ()=>{
    ship.hit(3,2);
    ship.hit(0,2);
    expect(ship.hits).toEqual([[3, 2], [0, 2]])
})
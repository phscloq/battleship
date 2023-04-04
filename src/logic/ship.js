const ships = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
}

class Ship{
        constructor(type){
            this.type=type;
            this.length=ships[type];
            this.sunk = false;
            this.hits=[];
        }
        hit(x, y){
            this.hits.push([x, y]);
            this.isSunk();
           return this.hits;
           
        }
        isSunk(){
            if(this.length===this.hits.length){
                this.sunk=true;
            }
            return this.sunk;
        }

}
export {Ship};

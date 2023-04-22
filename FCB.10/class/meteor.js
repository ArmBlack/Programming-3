let LivingCreature = require("./LivingCreature")

module.exports =class Meteor extends LivingCreature{
    constructor(x,y){
        super(x,y)
        this.energy = 5
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell
    }
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 9;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy-=5

            if (this.energy < 0) {
                this.die()
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < meteorArr.length; i++) {
            if (meteorArr[i].x == this.x && meteorArr[i].y == this.y) {
                meteorArr.splice(i, 1)
            }
        }
        
    }
}
let LivingCreature = require("./LivingCreature")

module.exports =class Meteor extends LivingCreature{
    constructor(x,y){
        this.x = x
        this.y = y
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
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
            



        }

        return found;
    }
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell)]

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
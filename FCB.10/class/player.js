let LivingCreature = require("./LivingCreature")

module.exports=class Player extends LivingCreature{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
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
    chooseCell(char,charColl1) {
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
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == charColl1) {
                    found.push(this.directions[i]);
                }
           

        }
    }

        return found;
    }
    //բազմանալ
    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell && this.energy > 5) {
            let newX = newCell[0];
            let newY = newCell[1];

            let ma = new Player(newX, newY);
            matrix[newY][newX] = 6;
            playerArr.push(ma);

            this.energy = 5;
        }
    }


    //ուտել
    eat() {
        let emptyCell = this.chooseCell(3,5);
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            for (let i = 0; i < ballArr.length; i++) {
                if (ballArr[i].x == newX && ballArr[i].y == newY) {
                ballArr.splice(i, 1)
                    break;
                }    
            }
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                grassArr.splice(i, 1)
                    break;
                }    
            }
            
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;


            if (this.energy > 50) {
                this.mul()
            }
        }



        else {
            this.move()
        }
    }

    //քայլել
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }

    



    die() {
        for (let i = 0; i < playerArr.length; i++) {
            if (playerArr[i].x == this.x && playerArr[i].y == this.y) {
                playerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

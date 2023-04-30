let LivingCreature = require("./LivingCreature")

module.exports = class EaterHelper extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 30;
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
        return super.chooseCell(char)
    }
    //բազմանալ
    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell)]
            ;
        if (newCell && this.energy > 41) {
            let newX = newCell[0];
            let newY = newCell[1];

            let grEat = new EaterHelper(newX, newY);
            matrix[newY][newX] = 8;
            EaterHelperArr.push(grEat);

            this.energy = 10;
        }
    }


    //ուտել
    eat() {
        let emptyCell = this.chooseCell(1);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]
        if (newCell) {
            this.energy += 10;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 0)
                    break
                }
            }

            matrix[newY][newX] = 8;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;  



            if (this.energy > 50) {
                this.mul()
            }

        }else {
            this.move()
        }
    
    }

    //քայլել
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 8;
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
        for (let i = 0; i < EaterHelperArr.length; i++) {
            if (EaterHelperArr[i].x == this.x && EaterHelperArr[i].y == this.y) {
                EaterHelperArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

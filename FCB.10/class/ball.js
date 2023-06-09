let LivingCreature = require("./LivingCreature")

module.exports=class Ball extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 10
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 5, this.y - 5],
            [this.x -5, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y -5],
            [this.x + 5, this.y -5],
            [this.x - 5, this.y + 5],
            [this.x -5, this.y + 5],
            [this.x + 5, this.y + 5]
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


    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]
        if (newCell && this.energy > 20) {
            let newX = newCell[0];
            let newY = newCell[1];

            let pred = new Ball(newX, newY);
            matrix[newY][newX] = 4;
            ballArr.push(pred);

            this.energy = 20;
        }
    }


    eat() {
        let emptyCell = this.chooseCell(3 );
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            
            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
          
        
              this.die()
              this.x = newX;
              this.y = newY;    
                    break;
                }
            }
            
           
            

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 30) {
                this.mul()
            }
        }



        else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
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
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < ballArr.length; i++) {
            if (ballArr[i].x == this.x && ballArr[i].y == this.y) {
                ballArr.splice(i, 1)
            }
        }
        
    }
}
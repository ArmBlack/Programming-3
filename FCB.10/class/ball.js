// class Ball{
//     constructor(x,y){
//         this.x = x
//         this.y = y
//         this.energy = 10
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//                           ]

//                     }
//       getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//         }
//         chooseCell(char,char1) {
//         this.getNewCoordinates();
//         let found = [];

//         for (let i in this.directions) {
//         let x = this.directions[i];
//         let y = this.directions[i];

//         if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
//             if (matrix[y][x] == char) {
//                 found.push(this.directions[i]);
//             }
//         }
//         if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
//             if (matrix[y][x] == char1) {
//                 found.push(this.directions[i]);
//             }
//         }
//         }
//     }
//         eat() {
//                 let emptyCell = this.chooseCell(1,6);
//                 let newCell = random(emptyCell)
    
//                 if (newCell) {
//                 this.energy += 5;
//                 let newX = newCell[0];
//                 let newY = newCell[1];
    
//                 for (let i = 0; i < ballArr.length; i++) {
//                     if (ballArr[i].x == newX && ballArr[i].y == newY) {
//                         ballArr.splice(i, 1)
//                         break;
//                     }
//                 }for (let i = 0; i < ballArr.length; i++) {
//                     if (ballArr[i].x == newX && ballArr[i].y == newY) {
//                         ballArr.splice(i, 1) 
//                         this.die()
//                   this.x = newX;
//                   this.y = newY;    
//                         break;
//                     }
//                 }
//                 matrix[newY][newX] = 3;
//                 matrix[this.y][this.x] = 0;
    
//                 this.x = newX;
//                 this.y = newY;
    
//             } 
//             if (this.energy > 30) {
//                  this.mul()
//             }else {
//                 this.move()
//             }
        
        

        

//         return found;
//         }
//     move() {
//         let emptyCell = this.chooseCell(0);
//         let newCell = random(emptyCell)

//         if (newCell) {
//             let newX = newCell[0];
//             let newY = newCell[1];

//             matrix[newY][newX] = 3;
//             matrix[this.y][this.x] = 0;


//             this.x = newX;
//             this.y = newY;

//             this.energy--

//             if (this.energy < 0) {
//                 this.die()
//             }
//         }
//     }

    
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (let i = 0; i < ballArr.length; i++) {
//             if (ballArr[i].x == this.x && ballArr[i].y == this.y) {
//                 ballArr.splice(i, 1)
//             }
//         }
//     }

// }
class Ball {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 5
        this.directions = []
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
    chooseCell(char, char1,char2,char3) {
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
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i]);
                }
            }


        }

        return found;
    }


    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell && this.energy > 20) {
            let newX = newCell[0];
            let newY = newCell[1];

            let pred = new Ball(newX, newY);
            matrix[newY][newX] = 3;
            ballArr.push(pred);

            this.energy = 20;
        }
    }


    eat() {
        let emptyCell = this.chooseCell(1, 2,5,6 );
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
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
        let newCell = random(emptyCell)

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
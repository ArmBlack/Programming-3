function matrixGenerator(matrixSize, grass, grassEater, predator, ball, wall, player, divader, eaterHelper,meteor) {
    var matrix = []

    for (var i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 1 
        }

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 2
        }

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 3
        }

    }

    for (let i = 0; i < ball; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 4
        }


    }




    for (let i = 0; i < wall; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 5
        }


    }


    for (let i = 0; i < player; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 6
        }

    }
    

    // for (let i = 0; i < matrixSize; i++) {
    //     for (let j = 0; j < matrixSize; j++) {

    //         if (i == j || i + j == matrix.length > 1) {
    //             matrix[i][j] = 9
    //         }
    //     }

    // }
    for (let i = 0; i < divader; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 7
        }


    }

    for (let i = 0; i < eaterHelper; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 8
        }


    }

    for (let i = 0; i < meteor; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 10

    }
    // for (let i = 0; i < Police; i++) {

    //     var x = Math.floor(Math.random() * matrixSize)
    //     var y = Math.floor(Math.random() * matrixSize)

    //     matrix[y][x] = 11

    // }


    return matrix


}





var matrix = matrixGenerator(30,30,15,25,2,6,21,20,24)
var side = 35


var grassArr = []
var grassEaterArr = []
var predatorArr = []
var ballArr = []
var wallArr = []
var playerArr = []
var divaderArr = []
var EaterHelperArr = []
var mediorArr = []


function setup() {
    frameRate(7)
    createCanvas(matrix[0].length * side, matrix.length * side)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var ba = new Ball(x, y)
                ballArr.push(ba)
            } else if (matrix[y][x] == 5) {
                var wall = new Wall(x, y)
                wallArr.push(wall)
            } else if (matrix[y][x] == 6) {
                var play = new Player(x, y)
                playerArr.push(play)
            } else if (matrix[y][x] == 7) {
                var  div = new Divader(x, y)
                divaderArr.push(div)
            } else if (matrix[y][x] == 8) {
                var  help= new EaterHelper(x, y)
                EaterHelperArr.push(help)
            }
        }

    }
}
function  Kill(){
    for(let y = 0;y < matrix.length ;y++){
        for(let x = 0;x < matrix[y].length ;x++){
            matrix[y][x] = 0

            
        }
    }
}
function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            var tobot = side - side * 0.1
            textSize(tobot)


            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                text("☘️", x * side, y * side + tobot)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                text("🐏", x * side, y * side + tobot)
            } else if (matrix[y][x] == 0) {
                fill("gray")
                rect(x * side, y * side, side, side)

            } else if (matrix[y][x] == 3) {

                fill("red")
                rect(x * side, y * side, side, side)
                text("🐕", x * side, y * side + tobot)
            }
            else if (matrix[y][x] == 4) {
                fill("orange")
                rect(x * side, y * side, side, side)
                text("⚽️", x * side, y * side + tobot)
            }
            else if (matrix[y][x] == 5) {
                fill("#783f04")
                rect(x * side, y * side, side, side)
                text("🧱", x * side, y * side + tobot)
            } else if (matrix[y][x] == 6) {

                fill("#bf9e13")
                rect(x * side, y * side, side, side)
                text("🤾🏿", x * side, y * side + tobot)
            } else if (matrix[y][x] == 7) {

                fill("#8500FA")
                rect(x * side, y * side, side, side)
                text("😈", x * side, y * side + tobot)
            } else if (matrix[y][x] == 8) {
                fill("black")
                rect(x * side, y * side, side, side)
                text("🐄", x * side, y * side + tobot)
            }else if (matrix[y][x] == 9) {
                fill("black")
                rect(x * side, y * side, side, side)
                text("☄️", x * side, y * side + tobot)
            }




        }

    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }



    for (let i in predatorArr) {
        predatorArr[i].eat()
    }


    for (let f in ballArr) {
        ballArr[f].eat()
    }


    for (let i in playerArr) {
        playerArr[i].eat()
    }
    for (let i in wallArr) {
        wallArr[i]
    }
    for (let i in divaderArr) {
        divaderArr[i].move()
    }
    for (let i in EaterHelperArr) {
        EaterHelperArr[i].move()
    }
    for (let i in mediorArr) {
        mediorArr[i].move()
    }

    for (let f in mediorArr) {
        mediorArr[f].move()
    }

}
function  Reset(){
    window.location.reload()
}

function Kill(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++){
            matrix[x][y]== 0
            }
        
    break
        }
}

for (let i = 0; i < grassArr.length; i++) {
    const grass = grassArr[i];
    grass.mul();
}

for (let i = 0; i < grassEaterArr.length; i++) {
    const eater = grassEaterArr[i];
    eater.eat();
}
for (let i = 0; i < predatorArr.length; i++) {
    const eater = predatorArr[i];
    eater.eat();
}
// if (grassArr == 0 && grassEaterArr == 0){
//     function Kill(){
//         Window.matrix.wall.Kill()
//     }
// }
// if (grassArr == 0 && grassEaterArr == 0 && predatorArr == 0 && divaderArr == 0 ){

// Window.location.reload()



// }
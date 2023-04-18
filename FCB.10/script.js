
var side = 35


function setup() {
    frameRate(7)
    createCanvas(30 * side,30 * side)

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
            }else if (matrix[y][x] == 10) {
                var  help= new Empty(x, y)
                emptyArr.push(help)
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
    for (let i in metiorArr) {
        metiorArr[i].move()
    }

   

}
function  Reset(){
    window.location.reload()
}

function KillAll(){
    socket.emit("killAll");
}

function AddGrass(){
    socket.emit("addGrass");
}
function AddGrassEater(){
    socket.emit("addGrassEater");
}
function AddPresator(){
    socket.emit("AddPresator");
}



